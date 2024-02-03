const router = require('express').Router();
const chatGptController = require('../controllers/chatGpt');

router.get('/', (_req, res) => res.send('Welcome to Recipe Book!'));

router.post('/v1/ask-chatgpt', chatGptController.askChatGpt);

module.exports = router;
