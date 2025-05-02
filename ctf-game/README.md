# Capture the Flag Game

## Overview
This project is a Capture the Flag (CTF) style game where players must answer questions to receive clues for the next question. The game is designed to be interactive and engaging, encouraging players to think critically and solve problems.

## Project Structure
The project is organized into the following directories and files:

- **public/**: Contains all the static files for the client-side of the application.
  - **index.html**: The main HTML document for the game.
  - **styles/**: Contains CSS files for styling the game.
    - **style.css**: The CSS styles for the game.
  - **scripts/**: Contains JavaScript files for client-side logic.
    - **main.js**: The JavaScript code that handles user interactions.

- **src/**: Contains the server-side code.
  - **app.js**: The entry point of the server-side application.
  - **routes/**: Contains route definitions for the application.
    - **index.js**: Defines the routes and maps them to controller actions.
  - **controllers/**: Contains the logic for handling requests.
    - **questionController.js**: Manages questions and answers.
  - **models/**: Contains data models for the application.
    - **questionModel.js**: Represents the data structure for questions.
  - **views/**: Contains the EJS templates for rendering views.
    - **questionView.ejs**: Renders the question view.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: Documentation for the project.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Start the server using `npm start`.
5. Open your web browser and go to `http://localhost:3000` to play the game.

## Game Rules
- Players will be presented with a question.
- To receive a clue for the next question, players must answer the current question correctly.
- The game continues until all questions have been answered.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.