import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { MongoClient } from 'mongodb'
import { mongourl, url } from './util/constant'
import multer from 'multer';
import fs from 'fs'
const app = express();
const port = 9000;

let monogodb

app.listen(port, () => {
    console.log(`server listening at port no ${port}`)
})

app.use(cors())
app.use(bodyParser.json())


MongoClient.connect(mongourl, (err, client) => {
    if (err) {
        return err
    }
    monogodb = client.db()
})

app.post(url.loginUrl, (req, res) => {
    monogodb.collection("profile").findOne({ username: req.body.username }, (err, results) => {
        if (err) {
            res.send({ status: 500, message: "Failed login attempt" })
        }
        if (results) {
            if (results.password === req.body.password) {
                res.send({ status: 200, data: results })
            } else {
                res.send({ status: 400, message: "Invalid Username or Password" })
            }
        } else {
            res.send({ status: 500, message: "Failed login attempt" })
        }
    })
})


app.post(url.signupUrl, (req, res) => {
    monogodb.collection("profile").save(req.body, (err, results) => {
        if (err) {
            res.send({ status: 500, message: "Failed to Signup ,Try again later" })
        }
        res.send({ status: 200, message: "Registered successfully" })
    })
})


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage }).single('file');
app.post(url.uploadPdf, (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})


app.get(url.retrievePdf, (req, res) => {
    monogodb.collection("pdfData").find().toArray((err, results) => {
        if (err) {
            res.send({ status: 500, message: "Failed to retrieve pdf ,Try again later" })
        }
        let userAndFileReponse = results.map((details) => {
            return { name: details.name, username: details.username, fileName: details.fileName }
        })
        res.send({ status: 200, pdflist: userAndFileReponse })
    })

})

app.get(url.downloadPdf, (req, res) => {
    let fileContent = fs.readFileSync(`./uploads/${req.query.fileName}`)
    let fileName = req.query.fileName
    fs.writeFileSync(`${fileName}`, fileContent)
    res.set('Content-type', 'application/pdf');
    res.download(fileName)
})

app.post(url.savePdfDetails, (req, res) => {
    monogodb.collection("pdfData").save(req.body, (err, results) => {
        if (err) {
            res.send({ status: 500, message: "Failed to upload pdf ,Try again later" })
        }
        res.send({ status: 200, message: "pdf details saved successfully" })
    })
})

