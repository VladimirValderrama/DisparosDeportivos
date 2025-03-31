const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  filename: String,
  path: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Photo', photoSchema);
