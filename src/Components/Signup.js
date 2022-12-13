import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Signup extends Component {

    state = {
        username: "",
        password: "",
        confirm_pwd: ""
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

    handleCPwdChange = (e) => {
        this.setState({
            confirm_pwd: e.target.value
        });
    }

    clearText = () => {
        this.setState({
            username: "",
            password: "",
            confirm_pwd: ""
        });

        const input_username = document.getElementById("input_username");
        if (input_username) {
            input_username.value = "";
        }

        const input_email = document.getElementById("input_email");
        if (input_email) {
            input_email.value = "";
        }

        const input_pwd = document.getElementById("input_pwd");
        if (input_pwd) {
            input_pwd.value = "";
        }

        const input_cpwd = document.getElementById("input_cpwd");
        if (input_cpwd) {
            input_cpwd.value = "";
        }
    }

    validateInput = (e) => {
        if (e.target.checkValidity()) {
            if (String(e.target.value).length < 4 || String(e.target.value).length > 20) {
                if (e.target.id === "input_username") {
                    document.querySelector("#" + e.target.id + "-invalid").innerText = "Username must be between 4 and 20 characters";
                }
                else if (e.target.id === "input_pwd") {
                    document.querySelector("#" + e.target.id + "-invalid").innerText = "Password must be between 4 and 20 characters";
                }
                else if (e.target.id === "input_cpwd") {
                    let pwd = document.querySelector("#input_pwd").value;
                    if (pwd !== e.target.value) {
                        document.querySelector("#" + e.target.id + "-invalid").innerText = "Passwords do not match";
                    }
                }
            }
            else {
            e.target.classList.remove("is-invalid");
            document.querySelector("#" + e.target.id + "-invalid").innerHTML = "";
            }
        }
        else {
            e.target.classList.add("is-invalid");

            if (e.target.id === "input_username") {
                document.querySelector("#" + e.target.id + "-invalid").innerText = "Please enter username";
            }
            else if (e.target.id === "input_pwd") {
                document.querySelector("#" + e.target.id + "-invalid").innerText = "Please enter password";
            }
            else if (e.target.id === "input_cpwd") {
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
                            <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <span className="login_switcher">LOG IN</span>
                            </Link>
                            <span className="login_switcher">SIGN UP</span>
                        </div>

                        <h1 className="text-primary d-flex justify-content-center py-3">SIGN UP</h1>

                        <div className="py-3 container">
                            <div className="d-flex">
                                <label htmlFor="input_username" className="h4"> &#x1F464;</label>
                                <div className="w-100">
                                    <input type="text" placeholder="Username" className="form-control" id="input_username" onBlur={this.validateInput} onChange={this.handleUsernameChange} required/>
                                    <div id="input_username-invalid" className="text-danger"></div>
                                </div>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <label htmlFor="input_username" className="h4">&#x1F512;</label>
                                <div className="w-100">
                                    <input type="password" placeholder="Password" className="form-control" id="input_pwd" onBlur={this.validateInput} onChange={this.handlePwdChange} required/>
                                    <div id="input_pwd-invalid" className="text-danger"></div>
                                </div>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <label htmlFor="input_username" className="h4">&#x1F512;</label>
                                <div className="w-100">
                                    <input type="password" placeholder="Confirm password" className="form-control" id="input_cpwd" onBlur={this.validateInput} onChange={this.handleCPwdChange} required/>
                                    <div id="input_cpwd-invalid" className="text-danger"></div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center py-3">
                            <button type="button" className="btn btn-primary">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;