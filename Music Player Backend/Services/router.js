const express = require('express');
const router = new express.Router();
const artists = require('../controllers/artists.js');
const songs = require('../controllers/songs');
const artist_songs = require('../controllers/artist_songs');

router.route('/artists/:id?')
  .get(artists.get);

router.route('/songs/:id?')
  .get(songs.get);
router.route('/artistsongs/:id?')
  .get(artist_songs.get);

module.exports = router;