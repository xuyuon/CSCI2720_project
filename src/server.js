const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.set('strictQuery', true);
// this is my MongoDB connect string
// you can change it to yours
// you can also keep using mine :(
mongoose.connect('mongodb+srv://stu009:p424894W@cluster0.wenbhsm.mongodb.net/stu009');

const LoginAccessSchema = new Schema({
username: { type: String, unique: true, required: true, minLength: 4, maxLength: 20 },
password: { type: String, required: true, minLength: 4, maxLength: 20 },
isAdmin: Boolean,
favouriteLocation: [{ type: Schema.Types.ObjectId, ref: "Location"}],
comments: [{ body: String }],
lastUpdate: { type: Date, default: Date.now }
});

const LocationSchema = new Schema({
name: { type: String, required: true },
latitude: { type: Number, required: true },
longitude: {type: Number, required: true },
programme: [{ type: Schema.Types.ObjectId, ref: "Programme" }]
});

const ProgrammeSchema = new Schema({
title:{type: String, required: true },
venue:{type: String, required: true },
date:{type: Date, required: true },
description:{type: String, required: true },
price:{type: String, required: true},
presenter:{type: String, required: true }
});

const CommentSchema = new Schema({
user : { type: Schema.Types.ObjectId, ref: "Access" },
body: { type: String, required: true }
});

const Access = mongoose.model("Access", LoginAccessSchema);
const Location = mongoose.model("Location", LocationSchema);
const Programme = mongoose.model("Programme", ProgrammeSchema);
const Comment = mongoose.model("Comment", LoginAccessSchema);

// create a new user
app.post("/newuser", (req, res) => {
    Access.create({
        username: req.body["username"],
        password: req.body["password"],
        isAdmin: false
        }, (err) => {
        if (err) {
            res.status(406);
            res.send();
        }
        else {
            res.status(201);
            res.send();
        }
    });
});

// login
app.post("/login", (req, res) => {
    Access.findOne({username: req.body["username"]}, (err, e) => {
        if (err) {
            res.send(err);
        }
        else if (e === null) {
            res.status(401);
            res.send();
        }
        else {
            if (e.password !== req.body["password"]) {
                res.status(401);
                res.send();
            }
            else {
                res.status(200);
                res.send(e);
            }
        }
    });
});

// get users data
app.post("/users", (req, res) => {
    Access.find({}, (err, e) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200);
            res.send(e);
        }
    })
});

//show specific location data
//not done
app.get('/lo/:name', (req,res) => { 
        Location.findOne({name: req.params['name']})
        .exec(function (err, e) {
            if (err)
                res.send(err);
            else {
                if (e==null) {
                    res.status(404).send();
                }
                else {
                    res.send(JSON.stringify(obj, null, 0.5));
                }
            }
       });
});

//show all location data
//not done
app.get('/lo', (req,res) => { 
        Location.find({}, (err, e) => {
        if (e.length > 0) {
                if (err)
                    res.send(err);
                else { 
                    res.send(JSON.stringify(e, null, 0.5));
                }
            }   
        });
});

var file_dir_xml = __dirname + '/XMLfiles/';
app.post('/getXML', (req, res) => {
    var url = 'https://www.lcsd.gov.hk/datagovhk/event/events.xml';
    var url2 = 'https://www.lcsd.gov.hk/datagovhk/event/venues.xml';
    var url3 = 'https://www.lcsd.gov.hk/datagovhk/event/eventDates.xml';
    var file_name = 'events.xml';
    var file_name2 = 'venues.xml';
    var file_name3 = 'eventDates.xml';
    //will create if not exist*
    var file = fs.createWriteStream(file_dir_xml + file_name, {'flags': 'w'});
    const get = https.get(url, (response) => {
        response.pipe(file);
        console.log('saved file in XMLfiles!');
    });
    var file2 = fs.createWriteStream(file_dir_xml + file_name2, {'flags': 'w'});
    const get2 = https.get(url, (response) => {
        response.pipe(file2);
        console.log('saved file2 in XMLfiles!');
    });
    var file3 = fs.createWriteStream(file_dir_xml + file_name3, {'flags': 'w'});
    const get3 = https.get(url, (response) => {
        response.pipe(file3);
        console.log('saved file3 in XMLfiles!');
    });
});

app.listen(8080);
