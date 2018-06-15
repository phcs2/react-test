const express = require('express');
const fs = require('fs');

const app = express();

app.get('/data/', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.listen(3001, () => console.log('The server running on port 3001'));