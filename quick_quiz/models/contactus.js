const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String
    },
    country: {
        type: String,
        default:''
    },
    subject:{
        type:String
    }
}, {
    timestamps: true
});

var contact = mongoose.model('Contactus',contactusSchema);

module.exports = contact;

/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/