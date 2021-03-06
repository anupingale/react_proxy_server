const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/addUser', (req, res) => {
  res.send('listening on proxy');
});

app.use(express.static(__dirname + '/react_server_app/build/'));

app.listen(port, () => {});
