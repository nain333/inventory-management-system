const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Server is working');
});


app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/products.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});