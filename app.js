const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use the PORT environment variable

app.get('/', (req, res) => {
  res.send('Hello, World! Your Node.js app is running on Cloud Run!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
