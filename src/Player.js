import Cards from './Cards'

class Player {
    constructor(name) {
        this.name = name
        this.getCards()
    }

    rollDice() {
        console('rollDice()')
    }

    foldCard() {
        console.log('popCard')
        this.cards.hand.pop()
    }

    getCards() {
        this.cards = new Cards()
    }

    getPlayer() {
        return `${this.name} holds ${this.cards.getHand()}`
    }
}

export default Player
