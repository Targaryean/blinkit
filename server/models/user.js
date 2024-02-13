const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt'); // For password hashing

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false, // Don't return password in queries
  },
 
}); 

userSchema.plugin(uniqueValidator); // Apply unique validator

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
