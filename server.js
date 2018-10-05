const express = require('express');
const app = express();

const issue = {
    title: "Hello"
};

app.get('/', function(req,res) {
    console.log('funguje');
    res.json(issue);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {console.log('server running')} );

