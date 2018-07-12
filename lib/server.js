const express = require('express')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/netflix-favorite'
const app = express()
const PORT = 8080

//connect to our db
mongoose.connect(uri)

console.log('asdasdasd')
app.use('/users', require('./api/users'))
app.use('/movies', require('./api/movies'))

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.toString() })
});

app.listen(PORT, async () => {
  await mongoose.connect(uri)
  console.log(`Listening on ${PORT}`)
});