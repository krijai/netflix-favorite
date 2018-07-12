const express= require('express')
const Router = express.Router
const router = Router()
const User = require('../models/User')

router.get('/', async(req, res, next) => { // <-- same as writing router.get('/users')
console.log("/users called");
  try{
    // get all users with the USer model
    const docs = await User.find()
    res.status(200).send(docs)
  }catch(e) {
    next(e)
  }
}) 

// get user data with particular user_id with the USer model ('/users/:user_id')
router.get('/:user_id', async(req, res, next) => {
  try{
    const { user_id } = req.params
    const doc = await User.findById(user_id)
    res.status(200).send(doc)
  }catch(e){
    next(e)
  }
})

router.post("/users/:name/:email/:phone", async (req, res, next) => {
  // Create ane instance of user model
  const user = new User({
  // pass in the userdetails of the user to the model
    name: req.params.name,
    email: req.params.email,
    phone: req.params.phone,
    })
  // save the userdetails into the database
    try{
      const doc = await user.save()
    // if successful, send back the created userdetails
      res.status(201).send({message: 'success', payload: doc})
    } catch(e) {
    // if fails, handle the error
      next(e)
    }
  });

module.exports = router