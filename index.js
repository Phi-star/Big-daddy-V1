const express = require('express');
const path = require('path');
const app = express();

// Define the port and domain
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'http://kidnohurger'; // Default to localhost if DOMAIN is not set

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Log the domain when the server starts
console.log(`Website will be deployed at ${domain}:${port}`);

// For any route, send the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${domain}:${port}`);
});
