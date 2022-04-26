const Clip = require('../models/clip');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  Clip.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(clip) {
    if (!clip) return res.redirect('/clips');
    clip.reviews.remove(req.params.id);
    clip.save().then(function() {
      res.redirect(`/clips/${clip._id}`);
    }).catch(function(err) {
      return next(err);
      res.redirect(`/clips/${clip._id}`);
    });
  });
}

function create(req, res) {
  Clip.findById(req.params.id, function(err, clip) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar =  req.user.avatar;
    clip.reviews.push(req.body);
    clip.save(function(err) {
      res.redirect(`/clips/${req.params.id}`);
    });
  });
}
