const express = require('express');
const fs = require('fs'); // For reading files
const path = require('path');
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Route to serve 'index.html'
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      res.status(500).send('Error loading the page');
      return;
    }
    res.setHeader('Content-Type', 'text/html'); // Set correct content type for HTML
    res.send(data);
  });
});

// Route to serve 'index.css'
app.get('/index.css', (req, res) => {
  fs.readFile(path.join(__dirname, 'index.css'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.css:', err);
      res.status(500).send('Error loading the CSS file');
      return;
    }
    res.setHeader('Content-Type', 'text/css'); // Set correct content type for CSS
    res.send(data);
  });
});

// Log the domain when the server starts
console.log(`Website is deployed at http://localhost:${port}`);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
