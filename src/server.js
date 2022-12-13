const mongoose = require(‘mongoose’);
const Schema = mongoose.Schema;

const LoginAccessSchema = new Schema({
username: { type: String, unique: true, required: true, minLength: 4, maxLength: 20 },
password: { type: String, unique: true, required: true, minLength: 4, macLength: 20 },
isAdmin: Boolean,
favouriteLocation: [{ type: Schema.Types.ObjectId, ref: ‘Location’}],
comments: [{ body: String }],
lastUpdate: { type: Date, default: Date.now }
});

const LocationSchema = new Schema({
name: { type: String, required: true },
latitude: { type: Number, required: true }
longitude: {type: Number, required: true },
programme: [{ type: Schema.Types.ObjectId, ref: ‘Programme’ }]
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
user : { type: Schema.Types.ObjectId, ref: ‘Access’ },
body: { type: String, required: true }
});

const Access = mongoose.model(‘Access’, LoginAccessSchema);
const Location = mongoose.model(‘Location’, LocationSchema);
const Programme = mongoose.model(‘Programme’, ProgrammeSchema);
const Comment = mongoose.model(‘Comment’, LoginAccessSchema);
