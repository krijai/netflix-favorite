const User = require('../models/User')

const users = []

const user1 = new User({
  name: 'krijai',
  email: '01@test.com',
  phone: '000 111 0000'
})

users.push(user1)

const user2 = new User({
  name: 'sibi',
  email: '02@test.com',
  phone: '000 222 0000'
})

users.push(user2)

module.exports = users