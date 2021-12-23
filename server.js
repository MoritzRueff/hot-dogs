import express from 'express'
import mongoose from 'mongoose'
import Dog from './models/dog.model.js'

const server = express()

mongoose.connect('mongodb://localhost:27017/hot-dogs')

server.use(express.json())

server.listen(4001, () => {
    console.log('Dog-Server is up and runnnig')
  }) 

server.get('/dogs', async (req, res) => {
    const dogs = await Dog.find()
    res.json(dogs)
})

server.post('/dogs', async (req, res) => {
    const doggy = new Dog( {
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        female: req.body.female
      })

      try {
        const result = await doggy.save()
        console.log(result)
       } catch (error) {
         res.json(error)
         }
})