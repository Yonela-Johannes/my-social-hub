const express = require("express");
const {
  getAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  loveAlbum,
  updateAlbum,
  getPlaysCount,
  getNewAlbums,
  getDownloadsCount,
  getAlbumSongs,
 } = require("../controllers/albumController");

const albumRouter = express.Router();

albumRouter.get('/', getAlbums)
albumRouter.get('/recent', getNewAlbums)
albumRouter.get('/:id', getAlbum)
albumRouter.get('/songs/:id', getAlbumSongs)
albumRouter.post('/', createAlbum);
albumRouter.delete('/:id', deleteAlbum);
albumRouter.patch('/love', loveAlbum);
albumRouter.patch('/:id', updateAlbum);
albumRouter.patch('/play/:id', getPlaysCount);
albumRouter.patch('/download/:id', getDownloadsCount);

module.exports = albumRouter;
