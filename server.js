const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


app.use(bodyParser.json());

mongoose.connect('mongodb://Oliver:hranolkz1@ds223253.mlab.com:23253/issues?authMechanism=SCRAM-SHA-1');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


const issue = {
    title: "Hello"
};


router.route('/issues').get((req, res) => {
    res.json(issue);
});

app.use('/', router);

app.listen(process.env.PORT || 8080, () => console.log('Express server running on port 4000'));

