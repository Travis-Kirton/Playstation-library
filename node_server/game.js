const mongoose = require('mongoose');

// Game Schema
const gameSchema = mongoose.Schema({
  game_title: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  num_players: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  }
});

// exporting Game object
const Game = (module.exports = mongoose.model('Game', gameSchema));

// Get Games
module.exports.getGames = (callback, limit) => {
  Game.find(callback).limit(limit);
};

// Get Game by iD
module.exports.getGameById = (id, callback) => {
  Game.findById(id, callback);
};

// Add Game
module.exports.addGame = (game, callback) => {
  Game.create(game, callback);
};

// Remove Game
module.exports.removeGame = (id, callback) => {
  let query = { _id: id };
  Game.remove(query, callback);
};
