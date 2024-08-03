// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Sample data
const dataMap = {
  message: 'Hello from the backend!',
  data: [1, 2, 3, 4, 5]
};

const data = {
    message: 'Data from backend!'
}

// API route
app.get('/api/dataMap', (req, res) => {
  res.json(dataMap);
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
