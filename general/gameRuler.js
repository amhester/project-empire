"use strict";

class GameRuler {
    constructor () {

    }

    resolve (action, game) {

    }

    serialize () {

    }

    static deserialize (rules) {

    }
}

class Action {
    constructor (type, targets, value) {
        let self = this;

        self.type = type || 0;
        self.targets = targets || 0,
        self.value = value || ""
    }

    static get TARGETS() {
        return {
            NONE: 0x000,
            MAIN: 0x001,
            BANK: 0x002,
            ARMORY: 0x004,
            SELF_HAND: 0x008,
            SELF_EMPIRE: 0x010,
            SELF_EQUIPMENT: 0x020,
            OTHER_HAND: 0x040,
            OTHER_EMPIRE: 0x080,
            OTHER_EQUIPMENT: 0x100,
            MAIN_DISCARD: 0x200,
            MARKET_DISCARD: 0x400,
            STAR_ZONE: 0x800
        };
    }

    static get ACTION_TYPES() {
        return {
            NONE: 0x00,
            DRAW: 0x01,
            SEARCH: 0x02,
            ATTACK: 0x03,
            STEAL: 0x04,
            BUILD: 0x05
        };
    }
}

module.exports = {
    GameRuler,
    Action
};
