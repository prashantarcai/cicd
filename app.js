const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Successfull, World! Your Node.js app is running on GCP VM!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
