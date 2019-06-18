import Cards from './Cards'

class Player {
    constructor(name) {
        this.name = name
        this.getCards()
    }

    rollDice(variants=['red', 'blue', 'teal', 'fuchsia', 'green', 'purple']) {
        const colorName = variants[Math.floor(Math.random() * variants.length)]
        console.log('rollDice', colorName)
        this.foldCard(colorName)
    }

    foldCard(colorName) {
        console.log('this.cards.hand', this.cards.hand)
        const indexToRemove = this.cards.hand.indexOf(colorName)
        if (indexToRemove >= 0) {
            this.cards.hand.splice(indexToRemove, 1)
        }
    }

    getCards() {
        this.cards = new Cards()
    }

    getPlayer() {
        return `${this.name} holds ${this.cards.getHand()}`
    }
}

export default Player
