const express = require('express');
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const router = express.Router();

app.use(cors());
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

