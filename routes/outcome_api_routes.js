const db = require("../models")

module.exports = function(app) {
    app.get("/api/outcomes", function(req, res){
        db.Outcome.findAll({}).then(function(dbOutcome){
            res.json(dbOutcome)
        });
    });

    app.post("/api/outcomes", function(req, res){
        db.Outcome.create({
            event_id: req.body.event_id,
            winner: req.body.winner
        }).then(function(dbOutcome){
            res.json(dbOutcome)
        });
    });
    
    app.delete("/api/outcomes/:id", function(req, res){
        db.Outcome.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbOutcome){
            res.json(dbOutcome)
        });
    });

};