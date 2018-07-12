const Movies = require('../models/Movies')

// const users = require('./users')

const movies = []

const movie = new Movies({
  title: 'Deadpool',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: 'http://via.placeholder.com/350x150'
})

// movie.comments.push(comment)
movies.push(movie)

const movie2 = new Movies({
  title: 'Deadpool2',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: 'http://via.placeholder.com/350x150'
})

// movie.comments.push(comment)
movies.push(movie2)

module.exports = movies