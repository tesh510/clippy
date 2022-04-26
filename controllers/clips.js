const Clip = require('../models/clip');

module.exports = {
  index,
};

function index(req, res) {
    res.render('clips/index', {title: 'clippy'})
}


