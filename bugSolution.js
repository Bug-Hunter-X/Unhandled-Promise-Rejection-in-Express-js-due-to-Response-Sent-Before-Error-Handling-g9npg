const express = require('express');
const app = express();
app.get('/', (req, res) => {
  let responseSent = false;
  someAsyncOperation().then(() => {
    if (!responseSent) {
      res.send('Hello, world!');
    }
  }).catch(err => {
    if (!responseSent) {
      res.status(500).send('Internal Server Error');
    } else {
      console.error('Error:', err); // Log the error even if response was already sent
    }
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});