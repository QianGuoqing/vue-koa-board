const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
  name: String,
  content: String,
  timestamp: {
    type: Date,
    default: Date.now()
  }
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel