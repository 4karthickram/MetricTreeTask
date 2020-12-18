import React, { Component } from 'react';
import axios from 'axios'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            successMsg: null
        }

    }

    componentWillMount() {
        this.user = window.localStorage.getItem('userDetails') && JSON.parse(window.localStorage.getItem('userDetails'));
    }
    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            successMsg: null
        })
    }

    onClickHandler = async (user) => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        let uploadresponse = await axios.post("http://localhost:9000/uploadPdf", data)
        if (uploadresponse.status === 200) {
            await axios.post("http://localhost:9000/savePdfDetails", { name: user.name, fileName: this.state.selectedFile.name, username: user.username })
            this.setState({ successMsg: "Pdf Saved Successfully", selectedFile: null, })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h4>Welcome, {this.user.name}</h4><br />
                {this.user.roles === "admin" ? <div className="card-action">
                    <a href={'/users'} className="waves-effect waves-light btn-small green"><i className="material-icons right"></i>PDF List</a>
                </div> : <div className="clearfix">
                        <input type="file" className="btn waves-effect waves-light" name="file" onChange={this.onChangeHandler} /><br></br><br></br>
                        <button type="submit" className="btn waves-effect waves-light" onClick={() => this.onClickHandler(this.user)}>Upload PDF<i className="material-icons right">send</i></button>
                    </div>}
                {this.state.successMsg ? <div className="card-panel teal lighten-2">Pdf uploaded successfully</div> : null}
                <br></br><br></br>
                <div className="col s6">
                    <div className="container">
                        <div className="card-panel">
                            <p>Name: {this.user.name}</p>
                            <p>Gender: {this.user.gender}</p>
                            <p>Date of Birth: {this.user.dob}</p>
                            <p>Role: {this.user.roles}</p>
                            <p>Phone No: {this.user.phoneNo}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;