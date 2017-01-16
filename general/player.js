"use strict";

class Player {
    constructor (name, character) {
        let self = this;

        self.name = name;
        self.character = character;
        self.hand = [];
        self.money = 0;
        self.empire = 0b000000000000;
        self.equipment = [];
        self.hasSpecial = true;
        self.conditions = Player.PLAYER_CONDITIONS.NONE;
    }

    _message (message) {

    }

    _promptHandSelection (num) {

    }

    wish (starzone) {
        let self = this;
    }

    turn (game) {
        let self = this;


    }

    static get PLAYER_CONDITIONS() {
        return {
            NONE: 0x000,
            NO_MARKET: 0x001,
            NO_BUILD: 0x002,
            NO_ADD_PIECES: 0x004,
            NO_ELEMENTAL: 0x008,
            INVULNERABLE: 0x010,
            ABILITY_LOCK: 0x020,
            UNSTOPPABLE: 0x040,
            KAMIKAZE: 0x080,
            TYRANNY: 0x100
        };
    }
}

module.exports = Player;