const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
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
  cover: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  songs: {
    song: {
      type: mongoose.Types.ObjectId,
      ref: "Song",
    },
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

module.exports = mongoose.model("Album", AlbumSchema);
