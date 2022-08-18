const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const convert = require('./modules/calculate')

const app = express();
const port = 3333;

// const pathDirectory = path.join(__dirname, '../public');
const urlencodedParser = express.urlencoded({extended: false});
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.post("/convert", urlencodedParser, (req, res) => {
    if(!req.body) {
        return res.sendStatus(400);
    } else {
    let result = convert(req.body.distance, req.body.from, req.body.to);

    res.send(result);
    }
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}...` )
});