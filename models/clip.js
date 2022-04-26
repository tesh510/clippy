const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const clipSchema = new Schema({
  Url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Clip', clipSchema);