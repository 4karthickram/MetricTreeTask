import React from 'react';
import { Link } from 'react-router-dom';
import um from '../assets/images/um.jpg';
import op from '../assets/images/use.jpg';

const Home = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <br />
                <br />
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={um} height={535.125} width={713.500} alt={'um'} />
                            <span className="card-title">User Management</span>
                        </div>
                        <div className="card-content">
                            <p>User management is a core part to any directory service and is a basic security essential for any organization. User management enables admins to control user access and on-board and off-board users to and from IT resources.</p>
                        </div>
                        <div className="card-action">
                            <a href={'/register'} className="waves-effect waves-light btn-small green"><i className="material-icons right">power</i>Register</a>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={op} height={535.125} width={713.500} alt={'op'} />
                            <span className="card-title">Operations</span>
                        </div>
                        <div className="card-content">
                            <p><i className="tiny material-icons">arrow_forward</i> Administration Roles – Add, Edit and Search Users</p>
                            <p><i className="tiny material-icons">arrow_forward</i> Admins can change Users permission roles</p>
                        </div>
                        <div className="card-action">
                            <Link to={'/login'} className="waves-effect waves-light btn-small blue"><i className="material-icons right">play_arrow</i>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Home;