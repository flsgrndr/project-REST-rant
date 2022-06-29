//modules and globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = process.env.PORT;

//middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//middleware for public folder -- css and image files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//routes
app.use('/places', require('./controllers/places'));

//home route
app.get('/', (req, res) =>{
    res.render('home');
})

//404 error route
app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(PORT);