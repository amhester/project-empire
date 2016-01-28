"use strict";

class Card {
    constructor (name, description, type, imageUrl, actions) {
        let self = this;

        self._name = name || '';
        self._description = description || '';
        self._type = type || CARD_TYPES.idk;
        self._imageUrl = imageUrl || '';
        self._actions = actions;
    }

    get name () { return this._name; }
    get description () { return this._description; }
    get type () { return this._type; }
    get imageUrl () { return this._imageUrl; }
    get actions () { return this._actions; }
}

const CARD_TYPES = {
    idk: 1
};