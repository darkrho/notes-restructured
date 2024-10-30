const mongoose = require('mongoose')

// schema with validation
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true
  },
  important: Boolean,
})

// set Schema to change _id for id and to hide _id and __v fields
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // change _id for id and put the _id to string
    returnedObject.id = returnedObject._id.toString()
    // hide _id and __v
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)


