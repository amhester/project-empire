"use strict";

class User {
    constructor (username, email, empire) {
        let self = this;

        self._username = username;
        self._email = email;
        self._empire = empire;
    }

    get username () { return this._username; }
    get email () { return this._email; }
    get empire () { return this._empire; }
}