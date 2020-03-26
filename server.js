const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static("puclic"));

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on PORT " + PORT);
    });
});