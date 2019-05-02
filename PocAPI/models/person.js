const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Person = new Schema({
  userName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  }
},{
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);