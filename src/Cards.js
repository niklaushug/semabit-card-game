class Cards {
    constructor(variants=['red', 'blue', 'teal', 'fuchsia', 'green', 'purple']) {
        this.hand = variants || []
        this.drawCards()
    }

    drawCards() {
        // removing one card is more performant than choosing several cards as long the variants are limited
        const indexToRemove = Math.floor(Math.random() * this.hand.length)
        this.hand.splice(indexToRemove, 1)
    }

    foldCard() {
        this.hand.pop()
    }

    getHand() {
        return `${this.hand.length} cards (${this.hand})`
    }
}

export default Cards
