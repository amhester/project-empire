"use strict";

class Game {
    constructor (deck, players) {
        let self = this;

        self._deck = deck || [];
        self._discard = [];
        self._removePile = [];
        self._players = players || [];
        self._turn = 0;
        self._activePlayer = null;
        self._winRequirement = function (p) {
            return p.score >= 24;
        };
    }

    get deck () { return this._deck; }
    get discard () { return this._discard; }
    get removePile () { return this._removePile; }
    get players () { return this._players; }
    get activePlayer () { return this._activePlayer; }
    get turn () { return this._turn; }

    shuffle() {

    }

    nextTurn() {
        let self = this;

        if(self._winRequirement(self._activePlayer)) {
            console.log('Game Over!');
            process.exit(1);
        }
        self._turn++;
        self._activePlayer = self._players[self._turn - 1];
    }

    beginDrawPhase() {
        let self = this;

        self._activePlayer.hand.concat(self.drawCard(1));
    }

    beginMainPhase() {

    }

    drawCard(x) {
        let self = this;

        let cards = [];
        for(let i = 0; i < x; i++) {
            cards.push(self._deck.pop());
        }
        return cards;
    }
}