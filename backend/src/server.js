require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const reponseHandlers = require('./middlewares/response');

const app = express();
const port = process.env.PORT; // Set your desired port number

app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.text({ limit: '25mb' }));
app.use(express.json({ limit: '1mb' }));
app.use(reponseHandlers);
app.use(routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
