require('dotenv').config();
require('./config/database'); 
 
require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

let movies;

Movie.find({}, function(err, movieDocs) {
  movies = movieDocs;
});