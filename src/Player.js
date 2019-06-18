class Player {
    constructor(name) {
        this.name = name
        this.cards = []
    }

    rollDice() {
        console('rollDice()')
    }

    foldCard() {
        console.log('popCard')
    }

    getCards(nr=5) {
        console.log('getCards')
    }

    getPlayer() {
        console.log(`${this.name} holds ${this.cards.length} cards`)
    }
}

export default Player
