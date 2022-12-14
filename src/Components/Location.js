import React, { Component } from 'react';
import axios from 'axios';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // const fs = require('fs');
    // const https = require('https');
    // const xml2js = require('xml2js');


    // var file_dir_xml = __dirname + '/XMLfile/';
    // app.post('/getXML', (req, res) => {
    //     var url = 'https://www.lcsd.gov.hk/datagovhk/event/events.xml';
    //     var file_name = 'events.xml';
    //     var file = fs.createWriteStream(file_dir_xml + file_name, {'flags': 'w'});
    //     const get = https.get(url, (response) => {
    //         response.pipe(file);
    //     });
    // });
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