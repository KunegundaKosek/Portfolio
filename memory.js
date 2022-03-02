const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const strartTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function() {

    //Mini gra - dwa kliknięcia
    activeCard = this;
    activeCard.classList.remove("hidden");

    //czy to 1 jedno kliknięcie
    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        console.log("1");
        return;

    //czy to 2 kliknięcie
    } else {
        cards.forEach(card => {
            card.removeEventListener("click", clickCard)
        })

        }
    }



    //jeśli drugie to zablokowanie na czas kliknięcia.

    //jeśli drugie to czy wygrana czy przegrana. Jeśli wygrana to sprawdzenie czy koniec gry

    //zabezpieczenia: dwukrotne kliknięcie w ten sam element i w element z klasą hidden
};

const init = function() {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position])
        cardsColor.splice(position, 1);
    })

    setTimeout(function() {
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 2000)
}

init()
