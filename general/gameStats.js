"use strict";

class GameStats {
    constructor () {
        let self = this;

        self.playerStats = {
            count: 0,
            players: [
                {
                    username: "",
                    character: "",
                    turns: 0,
                    turnLengths: [],
                    avgLength: 0,
                    shortestTurn: 0,
                    longestTurn: 0,
                    totalTurnLength: 0
                }
            ]
        };
        self.turnStats = {
            count: 0,
            turnLengths: [],
            avgLength: 0,
            shortest: 0,
            longest: 0,
            totalLength: 0
        };
        self.cardStats = {
            cardsDrawn: 0,
            playedCount: 0,
            drawnPerTurn: [],
            playedPerTurn: [],
            avgDrawnPerTurn: 0,
            avgPlayedPerTurn: 0,
            minDrawn: 0,
            minPlayed: 0,
            maxDrawn: 0,
            maxPlayed: 0,
            main: {

            },
            armory: {

            },
            bank: {

            },
            market: {

            },
            playedByCardName: {
                "<cardName>": 0
            }
        };
        self.moneyStats = {
            totalGained: 0,
            totalSpent: 0,
            gainedPerTurn: [],
            spentPerTurn: [],
            avgGainedPerTurn: 0,
            avgSpentPerTurn: 0,
            minSpent: 0,
            minGained: 0,
            maxSpent: 0,
            maxGained: 0
        };
        self.buildStats = {
            totalBuilt: 0,
            builtPerTurn: [],
            avgBuiltPerTurn: 0,
            minBuilt: 0,
            maxBuilt: 0
        };
        self.attackStats = {
            totalAttacksAttempted: 0,
            totalAttacksSucceeded: 0,
            attacksAttemptedPerTurn: [],
            attacksSucceededPerTurn: [],
            avgAttacksAttemptedPerTurn: 0,
            avgAttacksSucceededPerTurn: 0,
            minAttacksAttempted: 0,
            minAttacksSucceeded: 0,
            maxAttacksAttempted: 0,
            maxAttacksSucceeded: 0,
            totalPiecesDestroyed: 0,
            piecesDestroyedPerTurn: [],
            avgPiecesDestroyedPerTurn: 0,
            minPiecesDestroyed: 0,
            maxPiecesDestroyed: 0,
            totalCardsStolen: 0,
            cardsStolenPerTurn: [],
            avgCardsStolenPerTurn: 0,
            minCardsStolen: 0,
            maxCardsStolen: 0,
            totalMoneyStolen: 0,
            moneyStolenPerTurn: [],
            avgMoneyStolenPerTurn: 0,
            minMoneyStolen: 0,
            maxMoneyStolen: 0
        };
    }
}

module.exports = GameStats;