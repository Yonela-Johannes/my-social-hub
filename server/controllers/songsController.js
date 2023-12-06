const mongoose = require('mongoose');
const Song =  require("../models/songModel");
const User = require('../models/userModel');

const getSongs = async (req, res) => {
  try {
      const song = await Song.find().populate('user').sort({"createdAt": -1}).populate('lovedUsers').populate('album');
      res.status(200).json(song)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

const getNewSongs = async (req, res) => {
  try {
      const song = await Song.find().populate('user').sort({"createdAt": -1}).populate('lovedUsers').populate('album').limit(10);
      res.status(200).json(song)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

const getSong = async (req, res) => {
  const { id: _id } = req.params;
  try {
      const song = await Song.findById(_id).populate('user').populate('lovedUsers').populate('album');
      res.status(200).json(song)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

const addSong = async (req, res) => {
  const { userId, title, cover, album, lyrics, date, artists, song } = req.body

  if(!userId) res.json({
    message: 'No user provided'
  });

   const findUser = await User.findById(userId);

   if(!findUser) res.json({
    message: 'User does not exist'
  });

   if(findUser?.isAdmin === false) res.json({
    message: 'User not authorized'
  });

  try {
    const newSong = new Song({song, title, cover, album, lyrics, date, artists, user: userId, createdAt: new Date().toISOString()})
    console.log(newSong)
    await newSong.save();
    res.status(200).json(newSong);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

const updateSong = async (req, res) => {
  const { id: _id } = req.params;
  const song = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No song with that id')
  const updatedSong = await Song.findByIdAndUpdate(_id, {...song, _id}, {new: true});
  res.json(updatedSong)
}

const deleteSong = async (req, res) => {
  const { id: _id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No song with that id')

  await  Song.findByIdAndRemove(_id);
  res.json({message: 'Song deleted successfully'});
}

const loveSong = async (req, res) => {
  const { songId, userId } = req.body;

  if (!userId || !songId) {
    return res.json({ message: 'Unauthenticated' });
  }

  try {
    const song = await Song.findById(songId);

    if (!song) {
      return res.json({ message: 'Song not found' });
    }

    const index = song.lovedUsers.findIndex((id) => id === userId);

    if (index === -1) {
      // User hasn't loved the song song yet, add the user to the list of lovedUsers
      song.lovedUsers.push(userId);
      song.loveCount += 1;

      const updatedSong = await song.save();

      return res.json(updatedSong);
    } else {
      return res.json({ message: 'User already liked song song' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const playSong = async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  console.log("trigger")
  // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No song with that id')

  const song = await Song.findById(id);
  const updatedSong = await Song.findByIdAndUpdate(id, {playCount: song.playCount + 1}, { new: true});

  res.json(updatedSong)
}

const downloadSong = async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No song with that id')

  const song = await Song.findById(id);
  const updatedSong = await Song.findByIdAndUpdate(id, {downloadCount: song.downloadCount + 1}, { new: true});

  res.json(updatedSong)
}

const viewSong = async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No song with that id')

  const song = await Song.findById(id);
  const updatedSong = await Song.findByIdAndUpdate(id, {viewCount: song.viewCount + 1}, { new: true});

  res.json(updatedSong)
}

module.exports = {addSong, getNewSongs, getSongs, getSong, updateSong, deleteSong , loveSong, playSong, downloadSong, viewSong}
