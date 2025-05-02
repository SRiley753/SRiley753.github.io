const express = require('express'); // Import Express
const path = require('path'); // Import path module
const app = express(); // Initialize the Express app
const PORT = 8080; // Define the port

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files (HTML, CSS, JS) from the correct "public" folder
app.use(express.static('C:/Users/P39LRU7/OneDrive - The Home Depot/ctf-game/public'));

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join('C:/Users/P39LRU7/OneDrive - The Home Depot/ctf-game/public', 'index.html'));
});

// Handle the /completion POST request
app.post('/completion', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        console.log(`[${new Date().toISOString()}] User "${userName}" has completed the game!`);
        res.json({ message: `Congratulations, ${userName}! Your completion has been recorded.` });
    } else {
        res.status(400).json({ error: 'User name is required.' });
    }
});



// Start the server
app.listen(PORT, '192.168.0.136', () => {
    console.log(`Server is running on http://192.168.0.136:${PORT}`);
});