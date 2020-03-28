module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index')
    });

    app.get('/event', function(req, res){
        res.render('event')
    });

    app.get('/roster', function(req,res){
        res.render('roster')
    });
}

