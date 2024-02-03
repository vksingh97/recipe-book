const express = require('express');
const routes = require('./routes/routes');

const app = express();
const port = 6000; // Set your desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(routes);
