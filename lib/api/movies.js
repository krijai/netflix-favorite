const express= require('express')
const Router = express.Router
const router = Router()
const Movies = require('../models/Movies')

router.get('/', async(req, res, next) => { // <-- same as writing router.get('/movies')
  try{
// get all movies with the movies model
    const docs = await Movies.find()
    res.status(200).send(docs)
  }catch(e) {
    next(e)
  }
}) 

// get user data with particular movie title with the Movies model ('/movies/:title')
router.get('/:title', async(req, res, next) => {
  try{
    const { title } = req.params
    const doc = await Movies.findById(title)
    res.status(200).send(doc)
  }catch(e){
    next(e)
  }
})

router.post("/movies/:title/:geners/:release_date/:description/:image", async (req, res, next) => {
// Create ane instance of movies model
  const movies = new Movies({
// pass in the moviedetails of the movies to the model
    title: req.params.title,
    geners: req.params.geners,
    release_date: req.params.release_date,
    description: req.params.description,
    image: req.params.image,
    })
// save the moviedetails into the database
    try{
      const doc = await movies.save()
// if successful, send back the created moviedetails
      res.status(201).send({message: 'success', payload: doc})
    } catch(e) {
// if fails, handle the error
      next(e)
    }
  });

module.exports = router