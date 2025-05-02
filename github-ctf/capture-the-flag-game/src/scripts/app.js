const questions = [
    {
        question: "What dataset holds information specifically for XDR events?",
        answer: "xdr_data",
        clue: "It's in the name."
    },
    {
        question: "What field is used to filter for a host in XDR datasets?",
        answer: "agent_hostname",
        clue: "Find a host in the dataset from the previous question."
    },
    {
        question: "How many results for the hostname C91001A120CD4F on 4/30/2025?",
        answer: "484699",
        clue: "Don't use a comma."
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