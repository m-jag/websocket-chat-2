const express = require('express');
const router = express.Router();

const ChatController = require('../controllers/Chat.controller');

router.use(express.json())

//Get a list of all chats
router.get('/', ChatController.getAllChats);

//Create a new chat
router.post('/', ChatController.createNewChat);

//Get a product by id
router.get('/:id', ChatController.findChatById);

//Update a product by id
router.patch('/:id', ChatController.updateChat);

//Delete a product by id
router.delete('/:id', ChatController.deleteChat);

module.exports = router;