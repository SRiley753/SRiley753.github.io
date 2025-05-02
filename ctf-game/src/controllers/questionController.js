class QuestionController {
    constructor(questionModel) {
        this.questionModel = questionModel;
    }

    getQuestion(req, res) {
        const question = this.questionModel.getCurrentQuestion();
        res.json(question);
    }

    checkAnswer(req, res) {
        const { answer } = req.body;
        const isCorrect = this.questionModel.checkAnswer(answer);
        res.json({ isCorrect });
    }

    provideClue(req, res) {
        const clue = this.questionModel.getClue();
        res.json({ clue });
    }
}

export default QuestionController;