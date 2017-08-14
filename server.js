const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const API_URL = 'https://www.cbr.ru/scripts';

app.use(cors());
app.use('/', (req, res) => {
  req.pipe(request({ qs: req.query, uri: API_URL + req.url })).pipe(res);
});


app.listen(process.env.PORT || 3001);
