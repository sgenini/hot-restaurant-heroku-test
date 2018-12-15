// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Saul Goodman",
        email: "itsallgoodman@hotmail.com",
        phoneNumber: "505-842-5662",
        uniqueID: "slippinJimmy"
    },
    {
        name: "Bob Belcher",
        email: "burgerbob@gmail.com",
        phoneNumber: "609-277-4623",
        uniqueID: "burgerBoss"
    }
]

// var waitingArray = [
//     {
//         name: "Bob Belcher",
//         email: "burgerbob@gmail.com",
//         phoneNumber: "609-277-4623",
//         uniqueID: "burgerBoss"
//     }
// ]

// Basic routing
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/all", function(req,res){
    res.sendFile(path.join(__dirname, "list.html"));
});


// Displays current tables
app.get("/api/tables", function(req,res){
    return res.json(tables);
});

// Displays current waitlist
// app.get("/api/waitlist", function(req,res){
//     return res.json(waitlist);
// });

// Create new reservation - takes in JSON input
app.post("/api/tables", function(req,res){
    var newReservation = req.body;
    console.log(newReservation);
    tables.push(newReservation);
    res.json(newReservation); 
})

app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
})