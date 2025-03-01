var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.send("My First Service in Express JS...");
})

app.listen(1111, (req, res) => {
    console.log("Node JS Application Started...");
})
