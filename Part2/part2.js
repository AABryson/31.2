//1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let baseURL = 'https://deckofcardsapi.com/api/deck'
$.getJSON(`${baseURL}/new/draw/?count=1`, response => {
    resp = response;
    console.log(`${resp.cards[0].value} of ${resp.cards[0].suit}`)
})

//2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.  Once you have both cards, console.log the values and suits of both cards.

$.getJSON(`${baseURL}/new/draw/?count=1`, response => {
    let resp = response;
    let value1 = resp.cards[0].value;
    let suit1 = resp.cards[0].suit;

    $.getJSON(`${baseURL}/new/draw/?count=1`, response => {
        let resp2 = response;
        let value2 = resp2.cards[0].value;
        let suit2 = resp2.cards[0].suit;
        console.log(`${value1} of ${suit1} and ${value2} of ${suit2}`)
    })
})
// 
//3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let btn = $('button')
let div = $('div')
let deckid = ''
$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`, response => {
    deckid = response.deck_id;

    
    btn.on('click', function () {
        $.getJSON(`${baseURL}/${deckid}/draw/?count=1`, response => {
            let resp = response;
            let cardImage = resp.cards[0].image;
            div.append(`<img src='${cardImage}'>`)
    
            if (resp.remaining === 0) {
                btn.remove();
            };
        });
    });
})
