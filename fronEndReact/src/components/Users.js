import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doGetUsers } from '../actions/Users';


class Users extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.doGetUsers({ url: 'http://localhost:9000/retrievePdf' });
    }

    downloadPdf = (user) => {
        window.location.href = `http://localhost:9000/downloadPdf?fileName=${user.fileName}`
    }


    render() {
        let { UsersData } = this.props;
        let { users } = UsersData
        return (
            <div className={'container'}>
                <div>
                    <h4>Users</h4>
                    <hr />
                </div>
                {users &&
                    <div className={'card-panel'}>
                        <table className="highlight responsive-table">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Employee Username</th>
                                    <th>File Name</th>
                                    <th>Download Pdf</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.fileName}</td>
                                            <td><a className="waves-effect waves-light btn" onClick={() => this.downloadPdf(user)}><i className="material-icons left">download</i>download</a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        UsersData: state.Users
    }
};

export default connect(mapStateToProps, { doGetUsers })(Users);