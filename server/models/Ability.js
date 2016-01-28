"use strict";

class Ability {
    constructor (name, description, requirements, actions) {
        let self = this;

        self._name = name;
        self._description = description;
        self._requirements = requirements;
        self._actions = actions;
    }

    get name () { return this._name; }
    get description () { return this._description; }
    get requirements () { return this._requirements; }
    get actions () { return this._actions; }
}