const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    regex: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  }
})

module.exports = mongoose.model('User', userSchema)