const express = require("express");
const {
  getSongs,
  getSong,
  addSong,
  deleteSong,
  loveSong,
  updateSong,
  playSong,
  getNewSongs,
  downloadSong,
  viewSong,
 } = require("../controllers/songsController");

const songsRouter = express.Router();

songsRouter.get('/', getSongs)
songsRouter.get('/recent', getNewSongs)
songsRouter.get('/:id', getSong)
songsRouter.post('/', addSong);
songsRouter.delete('/:id', deleteSong);
songsRouter.patch('/love', loveSong);
songsRouter.patch('/:id', updateSong);
songsRouter.patch('/view/:id', viewSong);
songsRouter.patch('/play/:id', playSong);
songsRouter.patch('/download/:id', downloadSong);

module.exports = songsRouter;
