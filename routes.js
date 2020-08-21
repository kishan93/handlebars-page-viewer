module.exports = function(app){

    app.get('/', (req, res) => {
        routeStack = app._router.stack;
        res.render('main', {
            routeStack
        });
    });

    // example
    app.get('/example', (req, res) => {
        let data = require('./data/example');
        res.render('example/index', data);
    });

};
