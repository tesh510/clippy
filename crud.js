require('dotenv').config();
require('./config/database'); 
 
const Clip = require('./models/clip');
const Character = require('./models/character');

let clips;

Clip.find({}, function(err, clipDocs) {
  clips = clipDocs;
});