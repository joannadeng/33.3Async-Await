let baseURL = "https://deckofcardsapi.com/api/deck"

// async function as method inside objects!
const deck = {
    async init() {
        let res = await axios.get(`${baseURL}/new/`)
        this.deckId = res.data.deck_id;
    },

    async shuffle() {
        let res = await axios.get(`${baseURL}/${this.deckId}`)
    },

    async card() {
        let c = await axios.get(`${baseURL}/${this.deckId}/draw/?count=1`)
        console.log(c.data.cards[0]['value'] + " of " + c.data.cards[0]['suit'])
        return `${c.data.cards[0]['value']} + " of " + ${c.data.cards[0]['suit']}`
    },

    async mulCards(num) {
        if (num > 0) {
            let c = await axios.get(`${baseURL}/${this.deckId}/draw/?count=${num}`)
            for (let i = 0; i < num; i++) {
            console.log(c.data.cards[i]['value'] + " of " + c.data.cards[i]['suit'])
            }
        } else {
            console.log ("num must be a positive number!")
        }
        
    }
}

// 1

deck.init();
deck.shuffle();
deck.card();

// 2
deck.init();
deck.shuffle();
deck.mulCards(2);
