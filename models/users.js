const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "The todo text field is required"]
  },
  edited: {
    type: String
  }
});


//User Schema with TodoSchema as a subdocument
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [TodoSchema]   
});

const User = module.exports = mongoose.model('User', UserSchema);