const User = require('../models/User')
const Movies = require('../models/Movies')
const users = require('./users')
const movies = require('./movies')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/netflix-favorite'

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Movies.deleteMany()])
}

const makeSeeds = async () => {
  // wait for mongoose to connect to our db
  await mongoose.connect(uri)

  //delete all current content in our db
  await truncateDatabase()

  // save user seeds into database
  await Promise.all(users.map(user => user.save()))

  // save post seeds into database
  await Promise.all(movies.map(movie => movie.save()));

  // close db connection
  mongoose.connection.close()
}

makeSeeds()