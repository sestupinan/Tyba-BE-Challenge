const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Dictionary of registered users
let users = {};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Register method
app.post('/registro', (req, res) => {
    const user = req.body;
    console.log(user);
    // Saves new user to the dictionary
    users[user.user]=user.password

    res.send('User is added to the database');
});

// Get method that lists users and their passwords (only for testing)
app.get('/users', (req, res) => {
    res.json(users);
});

// Method for user login.
app.post('/login', (req, res) => {
    const userToLog = req.body;
    console.log(userToLog);

    // Response depending if credentials are correct.
    if(users[userToLog.user]==null)
    {
        res.send('User does not exist in the database');
    }
    else if(users[userToLog.user]!=userToLog.password)
    {
        res.send('Incorrect password');
    }
    else
    {
        res.send('Login successful');
    }
});



app.listen(port, () => console.log(`BE Tyba app listening on port ${port}!`));
