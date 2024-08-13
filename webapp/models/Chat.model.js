const mongoose = require('mongoose');
mongoose.connect(process.env.ME_CONFIG_MONGODB_URL);
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: {
    type: String,
    required: [true, "\"name\" not specified."]
  },
  message: {
    type: String,
    required: [true, "\"message\" not specified."]
  },
  time : {
    type : Date, 
    default: Date.now,
    required: true
  }
});

const Chat = mongoose.model('chat', ChatSchema);
module.exports = Chat;