const express = require('express');
const mongoose = require('mongoose');
const app = express();

// acquire Game model
Games = require('./game');

// Connect to mongodb docker container
mongoose.connect('mongodb://ps_mongo_container:27017/ps-game-lib');

const mongo_conn = mongoose.connection
  .once('open', () => {
    console.log('Connection made to mongodb.');
  })
  .on('error', err => {
    console.log('Connection error: ', err);
  });

app.use(express.json());

// Allow access via GET/POST methods etc
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.listen('4000', () => {
  console.log('Listening on port 4000');
});

// GET games
app.get('/api/games', (req, res) => {
  Games.getGames((err, games) => {
    if (err) {
      throw err;
    }
    res.json(games);
  });
});

// POST 'new' game
app.post('/api/games', (req, res) => {
  let game = req.body;
  Games.addGame(game, (err, game) => {
    if (err) {
      throw err;
    }
    res.json(game);
  });
});

// GET game by id
app.get('/api/games/:_id', (req, res) => {
  Games.getGameById(req.params._id, (err, game) => {
    if (err) {
      throw err;
    }
    res.json(game);
  });
});

// DELETE game
app.delete('/api/games/:_id', (req, res) => {
  Games.removeGame(req.params._id, (err, game) => {
    if (err) {
      throw err;
    }
    res.json(game);
  });
});
