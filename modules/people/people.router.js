const express = require('express')
const json = require('body-parser').json();
const store = require('../../store');

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get()
  res.json(people)
})

router.post('/', json, (req, res) => {
  
  const { name } = req.body;

  // const name = name; 
  const people = People.enqueue(name)
  res.status(201).send()
  // return people.all();
})

module.exports = router
