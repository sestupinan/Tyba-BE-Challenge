const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// List of registered users
let users = {};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/registro', (req, res) => {
    const user = req.body;
    console.log(user);
    users[user.user]=user.password
    //users.push(user);

    res.send('User is added to the database');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/login', (req, res) => {
    const userToLog = req.body;
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
