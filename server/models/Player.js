"use strict";

class Player {
    constructor (user) {
        let self = this;

        self._user = user || null;
        self._hand = [];
        self._score = 0;
        self._status = STATUSES.ok;
        self._tokens = 0;
    }

    get user () { return this._user; }
    get hand () { return this._hand; }
    get score () { return this._score; }
    get status () { return this._status; }
    get tokens () { return this._tokens; }
    set user (val) { this._user = val; }
    set hand (val) { this._hand = val; }
    set score (val) { this._score = val; }
    set status (val) { this._status = val; }
    set tokens (val) { this._tokens = val; }
}

const STATUSES = {
    ok: 1
};