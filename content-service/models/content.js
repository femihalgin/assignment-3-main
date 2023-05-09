'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    title: {
        type: String,
        required: 'Title Required.'
    },
    description: {
        type: String,
        required: 'Description Required.'
    },
    fileName: {
        type: String,
        required: 'File name Required.'
    }
});

module.exports = mongoose.model('Contents', ContentSchema);
