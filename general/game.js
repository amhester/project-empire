"use strict";

const Deck = require("./deck");
const Card = require("./card");

class Game {
    constructor () {
        let self = this;

        self.turn = 0;

        //Decks
        self.main = new Deck();
        self.discard = new Deck();
        self.bank = new Deck();
        self.armory = new Deck();
        self.market = new Deck();
        self.marketDiscard = new Deck();
        self.starzone = new Deck();

        //Other stuff
        self.players = [];
        self.stats = null;
        self.actionResolver = null;
    }

    _orderPlayers () {
        let self = this;

        ///TODO: at this point, should probably just implement shuffle as array extension...
        ///TODO: IF Chamira is in, then she always goes first, so her spot should be index 0;

    }

    _sortAndInitCards (cards) {
        let self = this;

        cards.forEach(c => {
            let card = new Card(c);
            if(card.hasType(Card.CARD_TYPES.MONEY)) {
                self.bank.cards.push(card);
            } else if (card.hasType(Card.CARD_TYPES.ATTACK)) {
                self.armory.cards.push(card);
            } else if (card.hasType(Card.CARD_TYPES.EQUIPMENT)) {
                self.market.cards.push(card);
            } else {
                self.main.cards.push(card);
            }
        });

        self.main.shuffle();
        self.bank.shuffle();
        self.armory.shuffle();
        self.market.shuffle();
    }

    init (players, stats, actionResolver, cards) {
        let self = this;

        self.players = players;
        self.stats = stats;
        self.actionResolver = actionResolver;

        //Decks
        self._sortAndInitCards(cards);
    }

    destroy () {
        let self = this;

        //Decks
        self.main = null;
        self.discard = null;
        self.bank = null;
        self.armory = null;
        self.market = null;
        self.marketDiscard = null;
        self.starzone = null;

        //Other stuff
        self.players = null;
        self.stats = null;
        self.actionResolver = null;
    }

    reset () {
        let self = this;

        //Decks
        self.main = new Deck();
        self.discard = new Deck();
        self.bank = new Deck();
        self.armory = new Deck();
        self.market = new Deck();
        self.marketDiscard = new Deck();
        self.starzone = new Deck();

        //Other stuff
        self.players = [];
        self.stats = null;
        self.actionResolver = null;
    }

    start () {
        let self = this;

        self._orderPlayers();

        self.players.forEach(p => {
            p.hand = self.main.draw(5);
            p.equipment = self.market.draw(1);
            p.money = 3;
        });
    }

    stop () {

    }

    next () {
        let self = this;

        ///TODO: Evaluate anything important about how previous game state resolved.
        //See if anyone won
        if(self.players.filter(p => p.empire >= 0b111111111111)) {
            ///TODO: Game is won, stop this and tally unresolved stats.
            self.stop();
        }

        self.turn++;
        self.players[(turn - 1) % self.players.length].turn(self);
    }

    serialize () {

    }

    deserialize () {

    }
}

module.exports = Game;