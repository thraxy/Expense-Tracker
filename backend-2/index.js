const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require("./routes/router");
const app = express();
const mongoose = require("mongoose");
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

require('dotenv/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', router);
app.use('/', require('./routes/refreshToken'));
app.use('/', require('./routes/Logout'));

app.use(verifyJWT);
app.use('/users', require('./api/users'));

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.DB_URI, dbOptions)
    .then(() => console.log("DB connected!"))
    .catch(err => console.log(err))

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

