const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
   const displayDogs = pets.dogs.all()
   const displayCats = pets.cats.all()
   return displayDogs, displayCats;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    
  }
}
