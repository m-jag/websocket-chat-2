const createError = require('http-errors');
const mongoose = require('mongoose');

const Chat = require('../models/Chat.model');

module.exports = {
  getAllChats: async (req, res, next) => {
    try {
      const chats = await Chat.find({}, { __v: 0 });
      res.send(chats);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewChat: async (req, res, next) => {
    try {
      const chat = new Chat(req.body);
      const result = await chat.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findChatById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const chat = await Chat.findById(id);
      if (!chat) {
        throw createError(404, 'Chat does not exist.');
      }
      res.send(chat);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Chat id'));
        return;
      }
      next(error);
    }
  },

  updateChat: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Chat.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Chat does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Chat Id'));
      }

      next(error);
    }
  },

  deleteChat: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Chat.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Chat does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Chat id'));
        return;
      }
      next(error);
    }
  }
};