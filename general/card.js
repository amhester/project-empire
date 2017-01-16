"use strict";

const Action = require("./gameRuler").Action;

class Card {
    constructor () {
        let self = this;

        self.id = 0;
        self.name = "";
        self.description = "";
        self.types = 0;
        self.actionCost = 0;
        self.actions = {
            and: {
                or: []
            },
            or: [],
            elemental: {

            }
        };
    }

    hasType (type) {
        return self.types & type === type;
    }

    static get CARD_TYPES() {
        return {
            NONE: 0x00000,
            ATTACK: 0x00001,
            DEFENSE: 0x00002,
            NEGATE: 0x00004,
            MONEY: 0x00008,
            BUILD: 0x00010,
            CONFRONTATION: 0x00020,
            ELEMENTAL: 0x00040,
            FIRE: 0x00080,
            WATER: 0x00100,
            EARTH: 0x00200,
            AIR: 0x00400,
            EQUIPMENT: 0x00800,
            STAR: 0x01000,
            DRAW: 0x02000,
            ARMORY: 0x04000,
            BANK: 0x08000,
            END_TURN: 0x10000,
            RESPONSE: 0x20000
        };
    }
}

module.exports = Card;