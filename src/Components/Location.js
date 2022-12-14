import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {//load for each set state(just want once=> new class + new componentdidmount)
        axios({
            // need change localhost to the publicIP
            url: "http://localhost:8080/getXML",
            method: "post"
        })
        .then(() => {
            
        })
        .catch((err) => {
            if (err.response.status === 406) {
                
            }
            else {
                console.log("Internal server error");
            }
        });
    }


    render() {

        let username = sessionStorage.getItem("username");
        if (username === null) {
			window.location.replace("http://localhost:3000/");
		}

        return (
			<main className="col">
                <div className="my-3 d-flex justify-content-between">
                    <h2 className="text-primary">Location</h2>
                    <h3 ><b className="text-primary">{username}</b>&nbsp;<i className="bi bi-person-circle"></i></h3>
                </div>
            </main>
        );
    }
}

export default Location;