var express = require("express");
var app = express();
// ensures express js program i want to run

app.get("/", (req, res) => {
    res.send("This is My First Program in Express JS...");
})

app.get("/showFullName/:firstName/:lastName", (req,res) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    let fullName = firstName + " " +lastName;
    res.send("Full Name is  " +fullName);    
})

app.get("/showInfo/:city/:company", (req,res) => {
    const city = req.params.city;
    const company = req.params.company;
    res.send("City is  " +city+ " Company is  " +company);
})

app.get("/show/:name", (req, res) => {
    const name = req.params.name;
    res.send("Student Name is " +name);
})

app.get("/krishna", (req, res) => {
    res.send("Hi I am Krishna...")
})

app.get("/gayathri", (req, res) => {
    res.send("Hi I am Gayathri...")
})
app.get("/kalaga", (req, res) => {
    res.send("Hi I am Kalaga...")
})
app.listen(8080, (req, res) => {
    console.log("Node Js Application Started...with Port 8080");
})

// ensures node js application is running in port 8080