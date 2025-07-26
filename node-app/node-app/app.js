const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD Pipeline on AWS!');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});