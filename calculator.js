//  Simulates a blackjack game. Features a dynamic bust percentage calculator
//  for assistance to the player. Dealer AI is based on the calculator.

//  Deck of cards. Syncs card pictures with values
let deck = [
  { html: '<img src="cards/ace_of_clubs.png" alt="ace of clubs" class="card">', value: 1 },
  { html: '<img src="cards/ace_of_diamonds.png" alt="ace of diamonds" class="card">', value: 1 },
  { html: '<img src="cards/ace_of_hearts.png" alt="ace of hearts" class="card">', value: 1 },
  { html: '<img src="cards/ace_of_spades2.png" alt="ace of spades" class="card">', value: 1 },

  { html: '<img src="cards/2_of_clubs.png" alt="2 of clubs" class="card">', value: 2 },
  { html: '<img src="cards/2_of_diamonds.png" alt="2 of diamonds" class="card">', value: 2 },
  { html: '<img src="cards/2_of_hearts.png" alt="2 of hearts" class="card">', value: 2 },
  { html: '<img src="cards/2_of_spades.png" alt="2 of spades" class="card">', value: 2 },

  { html: '<img src="cards/3_of_clubs.png" alt="3 of clubs" class="card">', value: 3 },
  { html: '<img src="cards/3_of_diamonds.png" alt="3 of diamonds" class="card">', value: 3 },
  { html: '<img src="cards/3_of_hearts.png" alt="3 of hearts" class="card">', value: 3 },
  { html: '<img src="cards/3_of_spades.png" alt="3 of spades" class="card">', value: 3 },

  { html: '<img src="cards/4_of_clubs.png" alt="4 of clubs" class="card">', value: 4 },
  { html: '<img src="cards/4_of_diamonds.png" alt="4 of diamonds" class="card">', value: 4 },
  { html: '<img src="cards/4_of_hearts.png" alt="4 of hearts" class="card">', value: 4 },
  { html: '<img src="cards/4_of_spades.png" alt="4 of spades" class="card">', value: 4 },

  { html: '<img src="cards/5_of_clubs.png" alt="5 of clubs" class="card">', value: 5 },
  { html: '<img src="cards/5_of_diamonds.png" alt="5 of diamonds" class="card">', value: 5 },
  { html: '<img src="cards/5_of_hearts.png" alt="5 of hearts" class="card">', value: 5 },
  { html: '<img src="cards/5_of_spades.png" alt="5 of spades" class="card">', value: 5 },

  { html: '<img src="cards/6_of_clubs.png" alt="6 of clubs" class="card">', value: 6 },
  { html: '<img src="cards/6_of_diamonds.png" alt="6 of diamonds" class="card">', value: 6 },
  { html: '<img src="cards/6_of_hearts.png" alt="6 of hearts" class="card">', value: 6 },
  { html: '<img src="cards/6_of_spades.png" alt="6 of spades" class="card">', value: 6 },

  { html: '<img src="cards/7_of_clubs.png" alt="7 of clubs" class="card">', value: 7 },
  { html: '<img src="cards/7_of_diamonds.png" alt="7 of diamonds" class="card">', value: 7 },
  { html: '<img src="cards/7_of_hearts.png" alt="7 of hearts" class="card">', value: 7 },
  { html: '<img src="cards/7_of_spades.png" alt="7 of spades" class="card">', value: 7 },

  { html: '<img src="cards/8_of_clubs.png" alt="8 of clubs" class="card">', value: 8 },
  { html: '<img src="cards/8_of_diamonds.png" alt="8 of diamonds" class="card">', value: 8 },
  { html: '<img src="cards/8_of_hearts.png" alt="8 of hearts" class="card">', value: 8 },
  { html: '<img src="cards/8_of_spades.png" alt="8 of spades" class="card">', value: 8 },

  { html: '<img src="cards/9_of_clubs.png" alt="9 of clubs" class="card">', value: 9 },
  { html: '<img src="cards/9_of_diamonds.png" alt="9 of diamonds" class="card">', value: 9 },
  { html: '<img src="cards/9_of_hearts.png" alt="9 of hearts" class="card">', value: 9 },
  { html: '<img src="cards/9_of_spades.png" alt="9 of spades" class="card">', value: 9 },

  { html: '<img src="cards/10_of_clubs.png" alt="10 of clubs" class="card">', value: 10 },
  { html: '<img src="cards/10_of_diamonds.png" alt="10 of diamonds" class="card">', value: 10 },
  { html: '<img src="cards/10_of_hearts.png" alt="10 of hearts" class="card">', value: 10 },
  { html: '<img src="cards/10_of_spades.png" alt="10 of spades" class="card">', value: 10 },

  { html: '<img src="cards/jack_of_clubs2.png" alt="jack of clubs" class="card">', value: 10 },
  { html: '<img src="cards/jack_of_diamonds2.png" alt="jack of diamonds" class="card">', value: 10 },
  { html: '<img src="cards/jack_of_hearts2.png" alt="jack of hearts" class="card">', value: 10 },
  { html: '<img src="cards/jack_of_spades2.png" alt="jack of spades" class="card">', value: 10 },

  { html: '<img src="cards/queen_of_clubs2.png" alt="queen of clubs" class="card">', value: 10 },
  { html: '<img src="cards/queen_of_diamonds2.png" alt="queen of diamonds" class="card">', value: 10 },
  { html: '<img src="cards/queen_of_hearts2.png" alt="queen of hearts" class="card">', value: 10 },
  { html: '<img src="cards/queen_of_spades2.png" alt="queen of spades" class="card">', value: 10 },

  { html: '<img src="cards/king_of_clubs2.png" alt="king of clubs" class="card">', value: 10 },
  { html: '<img src="cards/king_of_diamonds2.png" alt="king of diamonds" class="card">', value: 10 },
  { html: '<img src="cards/king_of_hearts2.png" alt="king of hearts" class="card">', value: 10 },
  { html: '<img src="cards/king_of_spades2.png" alt="king of spades" class="card">', value: 10 }
];

// Fisher–Yates shuffle
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

//  Creates a hand that keeps track of cards and values
function createHand() {
  return {
    value: 0,
    hasAce: false,
    firstAceUsed: false,
    cards: []
  };
}

let player = createHand();
let dealer = createHand();
let dealerCard2 = "";

// Draws a card from the deck into a hand
function drawCard(hand) {
  let card = deck.pop();

  // Ace handling
  if (card.value === 1 && !hand.hasAce) {
    hand.value += 11;
    hand.hasAce = true;
  } else {
    hand.value += card.value;
  }

  hand.cards.push(card.html);
  return card.html;
}

//  Calculates bust percentage for a hand. Handles hard hand for first ace.
function calculateBustPercentage(hand) {
  if (hand.value <= 11) {
    return 0; // can't bust on next card
  }

  // Adjust bustpoint for hard hand
  let bustpoint = 22 - hand.value;
  if (hand.hasAce && !hand.firstAceUsed) {
    bustpoint += 10;
  }

  // Count how many cards would bust
  let count = deck.filter(c => c.value > bustpoint - 1).length;
  return (count / deck.length) * 100;
}

//  Updates the player's bust percentage.
function updatePlayerPercentage() {
  let percentage = document.getElementById("percentage");
  if (player.value === 21) {
    percentage.innerHTML = "Perfect : )";
  } else if (player.value > 11) {
    let bustPct = calculateBustPercentage(player);
    percentage.innerHTML = "Bust Percentage: " + bustPct.toFixed(2) + "%";
  } else {
    percentage.innerHTML = "Bust Percentage: 0%";
  }
}

// Deals cards to the player and dealer's hands
function dealCards() {
  let dealerCardsDiv = document.getElementById("dealer-cards");
  let playerCardsDiv = document.getElementById("player-cards");

  // Dealer: one face-up, one face-down
  dealerCardsDiv.innerHTML += drawCard(dealer) + '<img src="img/cardback.png" alt="Back of card" class="card">';
  dealerCard2 = drawCard(dealer);

  // Player: two face-up
  playerCardsDiv.innerHTML += drawCard(player) + drawCard(player);

  updatePlayerPercentage();
}

//  Dealer's AI. Plays until game concludes.
function dealerPlays() {
  let dealerCardsDiv = document.getElementById("dealer-cards");

  // Dealer hits until bust chance ≥ 50%
  while (calculateBustPercentage(dealer) < 50) {
    dealerCardsDiv.innerHTML += drawCard(dealer);
    if (dealer.value > 21 && dealer.hasAce && !dealer.firstAceUsed) {
      dealer.value -= 10;
      dealer.firstAceUsed = true;
    }
  }

  // Reveal hidden card
  const hiddenCard = dealerCardsDiv.querySelector('img[alt="Back of card"]');
  if (hiddenCard) {
    // Parse dealerCard2 HTML string into an element
    const tpl = document.createElement("template");
    tpl.innerHTML = dealerCard2.trim();
    const revealedEl = tpl.content.firstChild;

    hiddenCard.replaceWith(revealedEl);
  }

  // Decide outcome
  let conclusion = document.getElementById("conclusion");
  let percentage = document.getElementById("percentage");
  percentage.innerHTML = "";
  if ((dealer.value > player.value || player.value > 21) && dealer.value < 22) {
    conclusion.innerHTML = "You lose";
  } else if ((dealer.value < player.value || dealer.value > 21) && player.value < 22) {
    conclusion.innerHTML = "You win";
  } else {
    conclusion.innerHTML = "Tie";
  }
}

// Sets game up and gives player's hit and stay buttons
window.onload = function() {
  shuffleDeck(deck);
  dealCards();

  let hit = document.getElementById("hit");
  hit.onclick = function() {
    let playerCardsDiv = document.getElementById("player-cards");
    if (player.value < 22) {
      playerCardsDiv.innerHTML += drawCard(player);
      updatePlayerPercentage();
    }
    if (player.value > 21 && player.hasAce && !player.firstAceUsed) {
      player.value -= 10;
      player.firstAceUsed = true;
      updatePlayerPercentage();
    } else if (player.value > 21) {
      dealerPlays();
    }
  };

  let stay = document.getElementById("stay");
  stay.onclick = function() {
    dealerPlays();
  };
};