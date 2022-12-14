import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        axios({
            // need change localhost to the publicIP
            url: "http://localhost:8080/users",
            method: "POST",
        })
        .then((e) => {
            this.setState({
                usersList: e.data
            });
        })
        .catch((err) => console.log("Internal server error"));
    }

    render() {
        let username = sessionStorage.getItem("username");
        if (username === null) {
			window.location.replace("http://localhost:3000/");
		}

        return (
            <main className="col">
                <div className="my-3 d-flex justify-content-between">
                    <h2 className="text-primary">User Data</h2>
                    <h3 ><b className="text-primary">{username}</b>&nbsp;<i className="bi bi-person-circle"></i></h3>
                </div>
                <div>
                    <h1 className="my-3">Users Manage</h1>
                    <button type="button" className="btn btn-primary" onClick={this.loadData}>Create New User</button>
                    <h3 className="my-3">Users Table</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-secondary">
                                <th>Username</th>
                                <th>Password</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usersList.map((user, index) => <UserRow key={index} i={index} username={user.username} password={user.password} />)}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

class UserRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUsername: "",
            newPwd: ""
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.username}</td>
                <td>{this.props.password}</td>
                <td>
                    <button type="button" className="btn btn-success my-1">Update User</button>
                    <br/>
                    <button type="button" className="btn btn-danger my-1">Delete User</button>
                </td>
            </tr>
        );
    }
}

export default User;