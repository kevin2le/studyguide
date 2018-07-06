const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    category: {
        type: String,
        enum: ["Sports", "Inspirational", "Nature"]
    }
}, {
    timestamps: true
});

module.exports = postSchema;