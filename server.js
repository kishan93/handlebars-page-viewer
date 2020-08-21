const express = require('express');
const app = express();
const open = require('open');
const port = process.env.SERVER_PORT | 3000;
//Loads the handlebars module

var hbs = require('express-hbs');
app.set('view engine', 'hbs');
//Sets our app to use the handlebars engine
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', hbs.express4({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir   : __dirname +'/views/partials',
    defaultLayout : __dirname +'/views/layouts/index',
    extname: '.hbs',
}));

//handlebar helpers
require("./handlebars-helpers")(hbs);

//statics
app.use(express.static('public'));

//routes
require('./routes.js')(app);

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
});