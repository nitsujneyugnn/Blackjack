// Name: Justin Nguyen
// Date: 09.03.24
// Section: CSE 190e
// This is the calculator.js page for my project.
// It is used in my blackjack game to make it playable,
// add a dealer AI, and to calculate the bust percentage.

let cards = [
  '<img src="cards/ace_of_clubs.png" alt="ace of clubs" class="card">',
  '<img src="cards/ace_of_diamonds.png" alt="ace of diamonds" class="card">',
  '<img src="cards/ace_of_hearts.png" alt="ace of hearts" class="card">',
  '<img src="cards/ace_of_spades2.png" alt="ace of spades" class="card">',

  '<img src="cards/2_of_clubs.png" alt="2 of clubs" class="card">',
  '<img src="cards/2_of_diamonds.png" alt="2 of diamonds" class="card">',
  '<img src="cards/2_of_hearts.png" alt="2 of hearts" class="card">',
  '<img src="cards/2_of_spades.png" alt="2 of spades" class="card">',

  '<img src="cards/3_of_clubs.png" alt="3 of clubs" class="card">',
  '<img src="cards/3_of_diamonds.png" alt="3 of diamonds" class="card">',
  '<img src="cards/3_of_hearts.png" alt="3 of hearts" class="card">',
  '<img src="cards/3_of_spades.png" alt="3 of spades" class="card">',

  '<img src="cards/4_of_clubs.png" alt="4 of clubs" class="card">',
  '<img src="cards/4_of_diamonds.png" alt="4 of diamonds" class="card">',
  '<img src="cards/4_of_hearts.png" alt="4 of hearts" class="card">',
  '<img src="cards/4_of_spades.png" alt="4 of spades" class="card">',

  '<img src="cards/5_of_clubs.png" alt="5 of clubs" class="card">',
  '<img src="cards/5_of_diamonds.png" alt="5 of diamonds" class="card">',
  '<img src="cards/5_of_hearts.png" alt="5 of hearts" class="card">',
  '<img src="cards/5_of_spades.png" alt="5 of spades" class="card">',

  '<img src="cards/6_of_clubs.png" alt="6 of clubs" class="card">',
  '<img src="cards/6_of_diamonds.png" alt="6 of diamonds" class="card">',
  '<img src="cards/6_of_hearts.png" alt="6 of hearts" class="card">',
  '<img src="cards/6_of_spades.png" alt="6 of spades" class="card">',

  '<img src="cards/7_of_clubs.png" alt="7 of clubs" class="card">',
  '<img src="cards/7_of_diamonds.png" alt="7 of diamonds" class="card">',
  '<img src="cards/7_of_hearts.png" alt="7 of hearts" class="card">',
  '<img src="cards/7_of_spades.png" alt="7 of spades" class="card">',

  '<img src="cards/8_of_clubs.png" alt="8 of clubs" class="card">',
  '<img src="cards/8_of_diamonds.png" alt="8 of diamonds" class="card">',
  '<img src="cards/8_of_hearts.png" alt="8 of hearts" class="card">',
  '<img src="cards/8_of_spades.png" alt="8 of spades" class="card">',

  '<img src="cards/9_of_clubs.png" alt="9 of clubs" class="card">',
  '<img src="cards/9_of_diamonds.png" alt="9 of diamonds" class="card">',
  '<img src="cards/9_of_hearts.png" alt="9 of hearts" class="card">',
  '<img src="cards/9_of_spades.png" alt="9 of spades" class="card">',

  '<img src="cards/10_of_clubs.png" alt="10 of clubs" class="card">',
  '<img src="cards/10_of_diamonds.png" alt="10 of diamonds" class="card">',
  '<img src="cards/10_of_hearts.png" alt="10 of hearts" class="card">',
  '<img src="cards/10_of_spades.png" alt="10 of spades" class="card">',

  '<img src="cards/jack_of_clubs2.png" alt="jack of clubs" class="card">',
  '<img src="cards/jack_of_diamonds2.png" alt="jack of diamonds" class="card">',
  '<img src="cards/jack_of_hearts2.png" alt="jack of hearts" class="card">',
  '<img src="cards/jack_of_spades2.png" alt="jack of spades" class="card">',

  '<img src="cards/queen_of_clubs2.png" alt="queen of clubs" class="card">',
  '<img src="cards/queen_of_diamonds2.png" alt="queen of diamonds" class="card">',
  '<img src="cards/queen_of_hearts2.png" alt="queen of hearts" class="card">',
  '<img src="cards/queen_of_spades2.png" alt="queen of spades" class="card">',

  '<img src="cards/king_of_clubs2.png" alt="king of clubs" class="card">',
  '<img src="cards/king_of_diamonds2.png" alt="king of diamonds" class="card">',
  '<img src="cards/king_of_hearts2.png" alt="king of hearts" class="card">',
  '<img src="cards/king_of_spades2.png" alt="king of spades" class="card">'
];


let cardValue = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

let pvalue = 0;
let dvalue = 0;
let deck = 51;
let dealerCard2 = "";
let pHasAce = false;
let dHasAce = false;
let pFirstAce = false;
let dFirstAce = false;

function dealCards() {
  let dealerCards = document.getElementById("dealer-cards");
  let playerCards = document.getElementById("player-cards");

  // Image found https://opengameart.org/content/colorful-poker-card-back
  // and is made available with a Creative Commons attribution license
  // Was made by jeffshee

  dealerCards.innerHTML += dDrawCard() + '<img src="img/cardback.png" alt="Back of card">';
  dealerCard2 = dDrawCard();
  playerCards.innerHTML += pDrawCard() + pDrawCard();
}

function pDrawCard() {
  let r = Math.floor(Math.random() * deck + 1);
  let tempCard = cards[r];
  let tempValue = cardValue[r];
  if (cardValue[r] === 1 && pHasAce === false) {
    pvalue += 11;
    pHasAce = true;
  } else {
    pvalue += cardValue[r];
  }
  cards.splice(r, 1, cards[deck]);
  cards.splice(deck, 1, tempCard);
  cardValue.splice(r, 1, cardValue[deck]);
  cardValue.splice(deck, 1, tempValue);
  deck--;
  cardValue.pop();
  return cards.pop();
}

function dDrawCard() {
  let r = Math.floor(Math.random() * deck + 1);
  let tempCard = cards[r];
  let tempValue = cardValue[r];
  if (cardValue[r] === 1 && dHasAce === false) {
    dvalue += 11;
    dHasAce = true;
  } else {
    dvalue += cardValue[r];
  }
  cards.splice(r, 1, cards[deck]);
  cards.splice(deck, 1, tempCard);
  cardValue.splice(r, 1, cardValue[deck]);
  cardValue.splice(deck, 1, tempValue);
  deck--;
  cardValue.pop();
  return cards.pop();
}

function pCalculate() {
  let bustpoint = 22 - pvalue;
  let percentage = document.getElementById("percentage");
  if (pvalue === 21) {
    percentage.innerHTML = "Perfect : )";
  } else if (pvalue > 11) {
    let count = 0;
    for (let i = 0; i < cardValue.length; i++) {
      if (cardValue[i] > bustpoint - 1) {
        count++;
      }
    }
    percentage.innerHTML = "Bust Percentage: " + (count / cardValue.length) * 100 + "%";
    if (pHasAce && pFirstAce === false) {
      let bustpoint2 = 22 - pvalue + 10;
      let count2 = 0;
      for (let i = 0; i < cardValue.length; i++) {
        if (cardValue[i] > bustpoint2 - 1) {
          count2++;
        }
      }
      percentage.innerHTML = "Bust Percentage (Hard Hand): " +
                             (count / cardValue.length) * 100 + "%";
    }
  } else {
    percentage.innerHTML = "Bust Percentage: 0%";
  }
}

function dCalculate() {
  let bustpoint = 22 - dvalue;
  if (dvalue > 11) {
    if (dHasAce && dFirstAce === false) {
      let bustpoint2 = 22 - dvalue + 10;
      let count2 = 0;
      for (let i = 0; i < cardValue.length; i++) {
        if (cardValue[i] > bustpoint2 - 1) {
          count2++;
        }
      }
      return (count2 / cardValue.length) * 100;
    }
    let count = 0;
    for (let i = 0; i < cardValue.length; i++) {
      if (cardValue[i] > bustpoint - 1) {
        count++;
      }
    }
    return (count / cardValue.length) * 100;
  } else {
    return 0;
  }
}

function dealerPlays() {
  let dealerCards = document.getElementById("dealer-cards");
  while (dCalculate() < 50) {
    dealerCards.innerHTML += dDrawCard();
    if (dvalue > 21 && dHasAce && dFirstAce === false) {
      dvalue -= 10;
      dFirstAce = true;
    }
  }
  if ((dvalue > pvalue || pvalue > 21) && dvalue < 22) {
    let conclusion = document.getElementById("conclusion");
    conclusion.innerHTML += "you lose";
    let reveal = dealerCards.innerHTML.replace('<img src="img/cardback.png" alt="Back of card">', dealerCard2);
    dealerCards.innerHTML = reveal;
  } else if ((dvalue < pvalue || dvalue > 21) && pvalue < 22) {
    let conclusion = document.getElementById("conclusion");
    conclusion.innerHTML += "you win";
    let reveal = dealerCards.innerHTML.replace('<img src="img/cardback.png" alt="Back of card">', dealerCard2);
    dealerCards.innerHTML = reveal;
  } else {
    let conclusion = document.getElementById("conclusion");
    conclusion.innerHTML += "tie";
    let reveal = dealerCards.innerHTML.replace('<img src="img/cardback.png" alt="Back of card">', dealerCard2);
    dealerCards.innerHTML = reveal;
  }
}

window.onload = function() {
  dealCards();
  pCalculate();
  let hit = document.getElementById("hit");
  hit.onclick = function() {
    let playerCards = document.getElementById("player-cards");
    if (pvalue < 22) {
      playerCards.innerHTML += pDrawCard();
      pCalculate();
    }
    if (pvalue > 21 && pHasAce && pFirstAce === false) {
      pvalue -= 10;
      pFirstAce = true;
      pCalculate();
    } else if (pvalue > 21) {
      dealerPlays();
    }
  }
  let stay = document.getElementById("stay");
  stay.onclick = function() {
    dealerPlays();
  }
}