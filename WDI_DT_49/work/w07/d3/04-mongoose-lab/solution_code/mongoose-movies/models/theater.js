var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var theaterSchema = new Schema({
    franchise: {
        type: String,
        enum: ['AMC', 'Regal', 'Cinemark']
    },
    branch: {
        type: String
    },
   movies: [{type: ObjectId, ref: 'Movie'}] 
},{
    timestamps: true
});

module.exports = mongoose.model('Theater', theaterSchema);

