let userName = 'dbusername';

let userPassword = 'dbusername';

let dbName = 'matrictree';

let mongourl = `mongodb+srv://${userName}:${userPassword}@cluster0.ttygh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

let url = {
    loginUrl: '/login',
    signupUrl: '/signup',
    uploadPdf: '/uploadPdf',
    retrievePdf: '/retrievePdf',
    downloadPdf: '/downloadPdf',
    savePdfDetails: '/savePdfDetails'
}

export { mongourl, url }