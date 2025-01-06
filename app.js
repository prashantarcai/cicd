const express = require('express');  // Import express
const app = express();               // Create an express app
const port = process.env.PORT || 8080; // Use the PORT environment variable provided by Cloud Run, or default to 8080

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! Your Node.js app is running on Cloud Run!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
