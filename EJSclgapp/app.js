// Import Express
const express = require("express");

// Create Express application
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Define the home route
app.get("/", (req, res) => {

    // Pass data to the EJS template
    res.render("home", {
        name: "26MX",
        department: "Computer Applications"
    });

});
app.get("/result", (req, res) => { 
    res.render("result", {
        name: "Arun",
        mark: 75
    });
});
// Start the server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});



