import React, { Component } from 'react';
import axios from 'axios';

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
        return (
			<main className="col">
                <h3> Location</h3>
            </main>
        );
    }
}

export default Location;