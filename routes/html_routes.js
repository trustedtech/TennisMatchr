const db = require("../models");
const run = require("../lib/functions.js");

module.exports = function(app) {

    app.get('/', function(req, res){
        res.render('index')
    });


    app.post('/login', async function(req,res){
        // console.log(JSON.stringify(req.body));
        
        db.Player.findOne({
            where: {
              username: req.body.uname
            }
        })
        .then(function(user) {
            // console.log(JSON.stringify(user));

            //Super basic authentication
            if (req.body.pword === user.password) {
                console.log('Password matched!');
                res.redirect('/event');
            }
            else {
                console.log('Password did not match...');
                res.redirect('/');
            }
        })
        .catch((err) => console.log(err));
    });


    app.post('/register', function(req,res){
        // console.log(JSON.stringify(req.body));

        db.Player.create({
            first_name: req.body.fname,
            last_name: req.body.lname,
            username: req.body.uname,
            password: req.body.pword,
            email: req.body.email
        })
        .then(function(user) {
            res.render('register')           
        })
        .catch((err) => console.log(err));
    });


    app.get('/event', function(req, res){
        db.Event.findAll({
            where: {
                active: 1
            }
        })
        .then((event) => { return run.buildEvents(event); }  )
        .then((data) => {
            // console.log(JSON.stringify(data.event));
            // console.log(JSON.stringify(data.tournament));
            // console.log(JSON.stringify(data.ladder));

            res.render('event', data);
        })
        .catch((err) => console.log(err));        
    });


    app.get('/event/create', function(req, res){
        res.render('event_create')
    });

    app.post('/event/create', function(req, res){

    });


    app.get('/player', function(req,res){
        db.Player.findAll({})
        .then((player) => {return run.buildPlayers(player)
            .then((data) => {
            res.render('player', data); 
        });       
    });
})}