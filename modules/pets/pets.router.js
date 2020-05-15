const express = require('express')
const json = require('body-parser').json()


const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  const pets = Pets.get()
  res.json(pets)
})

router.delete('/', json, (req, res) => {
  res.status(200).send(Pets.dequeue())
})

module.exports = router
