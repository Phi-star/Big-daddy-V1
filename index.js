const express = require('express');
const path = require('path');
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Middleware to log requests for static files
app.use((req, res, next) => {
  console.log(`Request for: ${req.url}`); // Log the requested file (e.g., /index.html or /index.css)
  next();
});

// Serve static files from the current directory
app.use(express.static(__dirname)); // Serves index.html, index.css, etc.

// Log the domain when the server starts
console.log(`Website is deployed at http://localhost:${port}`);

// For any route, send the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ensures index.html is served for all routes
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  
