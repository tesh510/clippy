const Performer = require('../models/character');
const Movie = require('../models/clip');

module.exports = {
  new: newCharacter,
  create,
  addToCast
};

function addToCast(req, res) {
  Clip.findById(req.params.id, function(err, clip) {
      clip.cast.push(req.body.characterId);
      clip.save(function(err) {
      res.redirect(`/clips/${clip._id}`);
    });
  });
}

function create(req, res) {
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Character.create(req.body, function (err, character) {
    res.redirect('/characters/new');
  });
}

function newCharacter(req, res) {
  Character.find({}).sort('name').exec(function (err, characters) {
    res.render('characters/new', {
      title: 'Add Characters',
      characters
    });
  });
}