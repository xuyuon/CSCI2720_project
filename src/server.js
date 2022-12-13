const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.set('strictQuery', true);
// this is my MongoDB connect string
// you can change it to yours
// you can also keep using mine
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

app.listen(8080);