import Player from './Player'

class Game {
    constructor(players=['Alice', 'Bob', 'Carol']) {
        this.rounds = 0
        this.players = []
        this.createPlayers(players)
    }

    createPlayers(players) {
        players.map(player => {
            this.players.push(new Player(player))
        })
    }

    getPlayers() {
        this.players.map(player => {
            console.log(player.getPlayer())
        })
    }

    getRounds() {
        return this.rounds
    }
}

export default Game
