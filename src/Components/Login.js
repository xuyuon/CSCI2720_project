import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    clearText = () => {
        this.setState({
            username: "",
            password: ""
        });

        const input_username = document.getElementById("login_username");
        if (input_username) {
            input_username.value = "";
        }

        const input_pwd = document.getElementById("login_pwd");
        if (input_pwd) {
            input_pwd.value = "";
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePwdChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    validateInput = (e) => {
        if (e.target.checkValidity()) {
            e.target.classList.remove("is-invalid");

            document.querySelector("#" + e.target.id + "-invalid").innerHTML = "";
        }
        else {
            e.target.classList.add("is-invalid");

            if (e.target.id === "login_username") {
                document.querySelector("#" + e.target.id + "-invalid").innerText = "Please enter username";
            }
            else if (e.target.id === "login_pwd") {
                document.querySelector("#" + e.target.id + "-invalid").innerText = "Please enter password";
            }
        }
    }

    // submit = (e) => {...}

    render() {
        return (
            <div id="login_page" className="container-fluid vh-100 d-flex justify-content-center">
                <div id="login_content" className="card shadow d-flex justify-content-center">
                    <div className="mx-5">
                        <div className="d-flex justify-content-around py-3">
                            <span className="login_switcher">LOG IN</span>
                            <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                            <span className="login_switcher">SIGN UP</span>
                            </Link>
                        </div>

                        <h1 className="text-primary d-flex justify-content-center py-3">LOG IN</h1>

                        <div className="py-3 container">
                            <div className="d-flex">
                                <label htmlFor="login_username" className="h4">&#x1F464;</label>
                                <div className="w-100">
                                    <input type="text" placeholder="Username" className="form-control" id="login_username" onBlur={this.validateInput} onChange={this.handleUsernameChange} required/>
                                    <div id="login_username-invalid" className="text-danger"></div>
                                </div>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <label htmlFor="login_username" className="h4">&#x1F512;</label>
                                <div className="w-100">
                                    <input type="password" placeholder="Password" className="form-control" id="login_pwd" onBlur={this.validateInput} onChange={this.handlePwdChange} required/>
                                    <div id="login_pwd-invalid" className="text-danger"></div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center py-3">
                            <Link to={"/dashboard/location"} style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn btn-primary">LOG IN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;