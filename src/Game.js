class Game {
    constructor(players=['Alice', 'Bob', 'Carol', 'Hans']) {
        this.rounds = 0;
        this.players = players
    }

    getPlayers() {
        return this.players
    }

    getRounds() {
        return this.rounds
    }
}

export default Game
