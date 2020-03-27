const db = require("../models")

module.exports = function(app) {
    app.get("/api/events", function(req, res){
        db.Event.findAll({}).then(function(dbEvent){
            res.json(dbEvent)
        });
    });
    
    app.post("/api/events", function(req, res){
        db.Event.create({
            creator: req.body.creator,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            event_type: req.body.event_type,
            style: req.body.style,
            players_count: req.body.players_count,
            active: req.body.active,
            notes: req.body.notes
        }).then(function(dbEvent){
            res.json(dbEvent)
        });
    });

    app.delete("/api/events/:id", function(req, res){
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbEvent){
            res.json(dbEvent)
        });
    });
}