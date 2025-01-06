const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use the port provided by Cloud Run or default to 8080

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from Cloud Run Thankx!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
