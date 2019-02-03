const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 3000;

app.listen(port, function() {
   console.log(`Server running on ${port}`)
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
   console.log(req.body);
});