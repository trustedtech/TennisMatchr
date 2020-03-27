const db = require("../models")

module.exports = function(app) {
    app.get("/api/courts", function(req, res) {
        db.Court.findAll({}).then(function(dbCourt){
            res.json(dbCourt)
        });
    });

    app.post("/api/courts", function(req, res){
        db.Court.create({
            court_name: req.body.court_name,
            address: req.body.address,
            lights: req.body.lights,
            quantity: req.body.quantity,
            court_type: req.body.court_type
        }).then(function(dbCourt){
            res.json(dbCourt)
        });
    });

    app.delete("/api/courts/:id", function(req, res){
        db.Court.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbEvent){
            res.json(dbEvent)
        });
    });
    
    
}
