"use strict";

class Action {
    constructor (type, iterations, requirements, options) {
        let self = this;

        self._type = type || ACTION_TYPES.none;
        self._iterations = iterations;
        self._requirements = requirements;
        self._options = options;
    }

    get type () { return this._type; }
    get iterations () { return this._iterations; }
    get requirements () { return this._requirements; }
    get options () { return this._options; }
}

const ACTION_TYPES = {
    none: 0,
    draw: 1,
    discard: 2,
    remove: 3
};