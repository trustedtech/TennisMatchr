const db = require("../models")

module.exports = function(app) {
    app.get("/api/players", function(req, res) {
        db.Player.findAll({}).then(function(dbPlayer){
            res.json(dbPlayer)
        });
    });

    app.get("/api/players/:id", function(req, res) {
        db.Player.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPlayer){
            res.json(dbPlayer)
        })
    })

    app.post("/api/players", function(req, res){
        db.Player.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            rating: req.body.rating
        }).then(function(dbPlayer){
            res.json(dbPlayer)
        });
    });

    app.delete("/api/players/:id", function(req, res){
        db.Player.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPlayer){
            res.json(dbPlayer)
        });
    });
    
}