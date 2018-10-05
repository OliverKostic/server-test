import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());


const issue = {
    title: "Hello"
};


app.get('*', (req, res) => {
    console.log('issue recieved');
    res.json(issue);
});




app.listen(process.env.PORT || 8080, () => console.log('Express server running on port 8080'));