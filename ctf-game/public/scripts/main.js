// This file contains the JavaScript code that handles the client-side logic of the game. It manages user interactions, such as submitting answers and displaying clues.

document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question'); // Matches <h2 id="question">
    const answerInput = document.getElementById('answer-input'); // Matches <input id="answer-input">
    const submitButton = document.getElementById('submit-answer'); // Matches <button id="submit-answer">
    const clueElement = document.getElementById('clue'); // Matches <p id="clue">

    let currentQuestionIndex = 0;
    let userName = '';

    const questions = [
        { questionText: "What dataset holds information specifically for XDR events?", answer: "xdr_data", clue: "It's in the name." },
        { questionText: "What field is used to filter for a host in XDR datasets?", answer: "agent_hostname", clue: "Find a host in the dataset from the previous question." },
        { questionText: "How many results for the hostname C91001A120CD4F on 4/30/2025?", answer: "484699", clue: "Don't use a comma." }
    ];

    function askForName() {
        const name = prompt("Please enter your name to start the game:");
        if (name && name.trim() !== '') {
            userName = name.trim();
            displayQuestion();
        } else {
            askForName(); // Keep asking until a valid name is provided
        }
    }

    function displayQuestion() {
        questionElement.textContent = questions[currentQuestionIndex].questionText;
        clueElement.textContent = '';
        answerInput.value = '';
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                clueElement.textContent = ''; // Clear the clue
                displayQuestion();
            } else {
                questionElement.textContent = `Congratulations, ${userName}! You've completed the game!`;
                submitButton.disabled = true;
                sendCompletionMessage();
            }
        } else {
            clueElement.textContent = questions[currentQuestionIndex].clue; // Show the clue on a missed answer
        }
    }

    function sendCompletionMessage() {
        fetch('/completion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Completion message sent:', data);
        })
        .catch(error => {
            console.error('Error sending completion message:', error);
        });
    }

    submitButton.addEventListener('click', checkAnswer);
    askForName();
});