"use strict";

const CARD_TYPES = require("./card").CARD_TYPES;

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

        return new Promise(function (resolve, reject) {
            _promptHandSelection(2).then(cards => {
                starzone.append(cards);
                resolve();
            });
        });
    }

    turn (game) {
        let self = this;

        //Draw for turn (phase 0)
        if(self.hasCondition(Player.PLAYER_CONDITIONS.TYRANNY)) {
            self.hand = self.hand.concat(game.main.draw(3));
        } else {
            self.hand = self.hand.concat(game.main.draw(1));
        }

        //Check if has confrontations
        for(let i = 0; i < self.hand.length; i++) {
            //if so, then resolve immediately (unless you're montosen and want to avoid one of them with your special)
            if(self.hand[i].hasType(CARD_TYPES.CONFRONTATION)) {
                //probably need to prompt user for selection, so they can choose what order to play their confrontations if they have more than one
            }
        }

        //Begin phase 1 (normal card playing phase). Can play cards with available actions, use abilities, and use equipment.

        //Begin phase 2 (purchase phase). Can purchase from marketSelection or empire pieces.

        //Donzo, call game.next()
        game.next();
    }

    hasCondition (cond) {
        return (this.conditions & cond) === cond;
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