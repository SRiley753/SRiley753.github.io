const questions = [
    {
        question: "What is the capital of France?",
        answer: "paris",
        clue: "It's known as the City of Light."
    },
    {
        question: "What is 2 + 2?",
        answer: "4",
        clue: "It's the first even prime number."
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter",
        clue: "It's named after the king of the Roman gods."
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const userAnswer = answerInput.value.toLowerCase();
    
    if (userAnswer === questions[currentQuestionIndex].answer) {
        alert("Correct! Here's your clue: " + questions[currentQuestionIndex].clue);
        currentQuestionIndex++;
        answerInput.value = "";
        
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert("Congratulations! You've completed the game!");
        }
    } else {
        alert("Incorrect. Try again!");
    }
}

document.getElementById("submit").addEventListener("click", checkAnswer);
window.onload = displayQuestion;