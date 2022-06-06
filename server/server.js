const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const cardoba = require('./routes/routes')

require('./database/database')
require('mongoose')

const PORT = process.env.PORT || 3001

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/cardoba', cardoba)

app.get('*', function (req, res, next) {
    next(err);
});
app.use(function (err, req, res, next) {
        res.sendFile(__dirname + '/server_error/error.html');
});

app.listen(PORT, err => {
    console.log(`Server up and running on port: ${PORT}`)
 })


