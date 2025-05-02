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
let userName = "";

// Function to start the game
function startGame() {
    const nameInput = document.getElementById("username");
    userName = nameInput.value.trim();

    if (userName === "") {
        alert("Please enter your name to start the game.");
        return;
    }

    // Hide the name section and show the question section
    document.getElementById("name-section").style.display = "none";
    document.getElementById("question-section").style.display = "block";
    document.getElementById("clue-section").style.display = "block";

    displayQuestion();
}

// Function to send a message to the server when the game is completed
function sendCompletionMessage() {
    const completionData = {
        user: userName,
        message: "Game completed successfully!",
    };

    // Simulate sending data to the server
    console.log("Sending completion data to server:", completionData);

    // You can replace this with an actual API call if needed
    // Example:
    // fetch("https://your-server-endpoint.com/complete", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(completionData),
    // });
}

// Function to display the current question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

// Function to check the user's answer
function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === questions[currentQuestionIndex].answer) {
        alert("Correct! Moving to the next question.");
        currentQuestionIndex++;
        answerInput.value = "";

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert(`Congratulations, ${userName}! You've completed the game!`);
            sendCompletionMessage();
        }
    } else {
        // Show the clue for the current question after a missed answer
        const clueElement = document.getElementById("clue");
        clueElement.textContent = questions[currentQuestionIndex].clue;
        alert("Incorrect. Here's a clue to help you: " + questions[currentQuestionIndex].clue);
    }
}

// Event listeners
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("submit").addEventListener("click", checkAnswer);

window.onload = displayQuestion;