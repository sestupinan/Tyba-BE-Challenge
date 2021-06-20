var express = require("express");
var path = require("path");

const user = require("./routes/userRoute");

var cors = require('cors');

var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", user);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

