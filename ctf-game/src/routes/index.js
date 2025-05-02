const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

const questionController = new QuestionController();

router.get('/question', questionController.getQuestion.bind(questionController));
router.post('/answer', questionController.checkAnswer.bind(questionController));

module.exports = router;