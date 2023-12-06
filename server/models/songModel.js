const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true
  },
  lyrics: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  artists: {
    type: String,
    required: true
  },
  album: {
    type: mongoose.Types.ObjectId,
    ref: "Album",
  },
  cover: {
    type: String,
    required: true
  },
  song: {
    type: String,
    required: true
  },
  playCount: {
    type: Number,
    default: 0
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  loveCount: {
    type: Number,
    default: 0
  },
  lovedUsers: {
    type: [mongoose.Types.ObjectId],
    default: [],
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

module.exports = mongoose.model("Song", songSchema);
