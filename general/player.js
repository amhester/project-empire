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
        self.condition = Player.PLAYER_CONDITIONS.NONE;
    }

    turn (game) {
        let self = this;

    }

    static get PLAYER_CONDITIONS() {
        return {
            NONE: 0x0000
        };
    }
}

module.exports = Player;