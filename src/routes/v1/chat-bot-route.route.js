const express = require('express');
const validate = require('../../middlewares/validate');
const chatBotValidation = require('../../validations/chat-bot.validation');
const chatBotController = require('../../controllers/chat-bot.controller');

const router = express.Router();

router.post('/', validate(chatBotValidation.chat), chatBotController.chat);

module.exports = router;
