const express = require('express');
const path = require('path');
const app = express();

// Define the port and domain
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'http://localhost'; // Default to localhost if DOMAIN is not set

// Serve static files from the current directory (home directory)
app.use(express.static(__dirname));

// Log the domain when the server starts
console.log(`Website will be deployed at ${domain}:${port}`);

// For any route, send the 'index.html' file as a fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${domain}:${port}`);
});
