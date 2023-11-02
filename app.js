const express = require('express');
const app = express();
const path = require('path');
const HOST = '0.0.0.0';

app.use('/css', express.static(path.join(__dirname, 'www', 'css')));
app.use('/js', express.static(path.join(__dirname, 'www', 'js')));

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});