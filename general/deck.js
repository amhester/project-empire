"use strict";

class Deck {
    constructor (name) {
        let self = this;

        self.name = name || "default";
        self.cards = [];
    }

    draw (num) {
        let self = this, arr = [];

        while(num) {
            arr.push(self.cards.pop());
            num--;
        }
        return arr;
    }

    shuffle () {
        let self = this, m = self.cards.length, i, t;

        while(m) {
            i = Math.floor(Math.random() * m--);
            t = self.cards[m];
            self.cards[m] = self.cards[i];
            self.cards[i] = t;
        }
        return self;
    }

    drawWhile (cond, cleanup) {
        let self = this, i = self.cards.length - 1, it = 0, arr = [];

        while(cond(self.cards[i], it) === false) {
            arr.push(self.cards.pop());
            it++;
            i--;
        }
        let card = self.cards[i];
        self.cards.splice(i , 1);
        cleanup(arr);
        return card;
    }

    append (cards) {
        let self = this;

        self.cards = self.cards.concat(cards);
        return self;
    }

    prepend (cards) {
        let self = this;

        self.cards = cards.concat(self.cards);
        return self;
    }
}

module.exports = Deck;