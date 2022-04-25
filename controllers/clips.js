const Clip = require('../models/clip');
const Character = require('../models/character');

module.exports = {
  index,
  show,
  new: newClip,
  create
};

function index(req, res) {
  Clip.find({}, function(err, clips) {
    res.render('clips/index', { title: 'All Clips', clips });
  });
}

function show(req, res) {
  Clip.findById(req.params.id)
    .populate('cast')
    .exec(function(err, clip) {
      Character.find(
        {_id: {$nin: clip.cast}},
        function(err, characters) {
          console.log(characters);
          res.render('clips/show', { title: 'Clip Detail',clip, characters });
        }
      );
    });
}

function newClip(req, res) {
  res.render('clips/new', { title: 'Add Clip' });
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var clip = new Clip(req.body);
  clip.save(function(err) {
    if (err) return res.redirect('/clips/new');
    console.log(clip);
    res.redirect(`/clips/${clip._id}`);
  });
}
