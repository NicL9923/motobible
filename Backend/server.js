const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongoose');
const router = express.Router();
const PORT = 4000;

let thingy = require('./model');

app.use(cors());
app.use(bodyParser.json());

//TODO: Change mongodb parameter
mongodb.connect('mongodb://127.0.0.1:27017/name', { useNewUrlParser: true });
const connection = mongodb.connection;

connection.once('open', () => {
    console.log("MongoDB connection established successfully.");
});

router.route('/').get((req, res) => {
    thingy.find((err, whateverThingy) => {
        if (err) {
            console.log("Error retrieving whateverThingy");
        } else {
            res.json(whateverThingy);
        }
    });
});

app.use('/', router);

app.listen(PORT, () => {
    console.log("Server has started on port " + PORT);
});