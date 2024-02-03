const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const reponseHandlers = require('./middlewares/response');

const app = express();
const port = 6000; // Set your desired port number

app.use(reponseHandlers);
app.use(routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
