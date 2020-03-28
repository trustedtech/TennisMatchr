const express = require("express");
const exphbs =  require("express-handlebars")

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

require("./routes/player_api_routes")(app);
require("./routes/events_api_routes")(app);
require("./routes/court_api_routes")(app);
require("./routes/outcome_api_routes")(app);

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on PORT " + PORT);
    });
});