"use strict";

const Game      = require("./game");
const Player    = require("./player");
const GameStats = require("./gameStats");
const GameRuler = require("./gameRuler");
const Cards     = require("./cards").cards;

var game = new Game();

function main() {
    let players = [
        new Player(),
        new Player()
    ];
    let stats = new GameStats();
    let actionResolver = new GameRuler();

    game.init(players, stats, actionResolver, Cards);
}