import Player from './Player'

class Game {
    constructor(players=['Alice', 'Bob', 'Carol']) {
        this.rounds = 0
        this.players = []
        this.winner
        this.createPlayers(players)
    }

    createPlayers(players) {
        players.map(player => {
            this.players.push(new Player(player))
        })
    }

    runGame() {
        this.rounds++
        this.players.map(player => {
            console.log(player.getPlayer())
            player.cards.foldCard()
            if (!this.winner && player.cards.hand.length === 0) {
                this.winner = player.name
            }
        })

        if (!this.winner) {
            this.runGame()
        } else {
            this.announceWinner()
        }
    }

    getPlayers() {
        this.players.map(player => {
            console.log(player.getPlayer())
        })
    }

    announceWinner() {
        console.log(`after ${this.rounds} the winner is ${this.winner}`)
    }

    getRounds() {
        return this.rounds
    }
}

export default Game
