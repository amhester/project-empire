"use strict";

class Empire {
    constructor (name, type, imageUrl, description, abilities) {
        let self = this;

        self._name = name || '';
        self._type = type || '';
        self._imageUrl = imageUrl || '';
        self._description = description || '';
        self._abilities = abilities || [];
    }

    get name () { return this._name; }
    get type () { return this._type; }
    get imageUrl () { return this._imageUrl; }
    get description () { return this._description; }
    get abilities () { return this._abilities; }
}