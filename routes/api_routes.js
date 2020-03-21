const db = require('../models');

module.exports = function (app) {
    app.get("/api/TennisMatchr", function (req, res) {
        db.TennisMatchr.findAll({}).then(function (dbTennisMatchr) {
            res.json(dbTennisMatchr)
        })
    })
}
    app.post("/api/TennisMatchr", function(req, res){
        db.TennisMatchr.create({
            player: req.body.text,
            rating: req.body.rating
        }).then(function(dbTennisMatchr){
            res.json(dbTennisMatchr)
        })
    })

