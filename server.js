const express = require('express');
const app = express();

const router = express.Router();

const issue = {
    title: "Hello"
};


router.route('/issues').get((req, res) => {
    res.json(issue);
});

app.use('/', router);

app.listen(process.env.PORT || 8080, () => console.log('Express server running on port 4000'));

