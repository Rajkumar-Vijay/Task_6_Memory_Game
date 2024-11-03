const cardsArray = [
  {
    name: "smile",
    icon: '<i class="fa-solid fa-face-smile"></i>',
  },
  {
    name: "tired",
    icon: '<i class="fa-solid fa-face-tired"></i>',
  },
  {
    name: "surprise",
    icon: '<i class="fa-regular fa-face-surprise"></i>',
  },
  {
    name: "angry",
    icon: '<i class="fa-solid fa-face-angry"></i>',
  },
  {
    name: "tear",
    icon: '<i class="fa-solid fa-face-sad-tear"></i>',
  },
  {
    name: "rollingEyes",
    icon: '<i class="fa-solid fa-face-rolling-eyes"></i>',
  },
  {
    name: "smile",
    icon: '<i class="fa-solid fa-face-smile"></i>',
  },
  {
    name: "tired",
    icon: '<i class="fa-solid fa-face-tired"></i>',
  },
  {
    name: "surprise",
    icon: '<i class="fa-regular fa-face-surprise"></i>',
  },
  {
    name: "angry",
    icon: '<i class="fa-solid fa-face-angry"></i>',
  },
  {
    name: "tear",
    icon: '<i class="fa-solid fa-face-sad-tear"></i>',
  },
  {
    name: "rollingEyes",
    icon: '<i class="fa-solid fa-face-rolling-eyes"></i>',
  },
];
let flippedCards = [];
let matchedCounts = 0;
suffleCards();
const memoryCard = document.getElementById("memoryCard");
console.log(cardsArray);
displayCards();

function suffleCards() {
  for (let i = cardsArray.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[randIndex]] = [
      cardsArray[randIndex],
      cardsArray[i],
    ];
  }
}

function displayCards() {
  cardsArray.forEach((cards, index) => {
    const card = document.createElement("div");
    card.setAttribute("id", index);
    card.classList.add("cardback");
    card.classList.add("active");
    memoryCard.append(card);
    card.addEventListener("click", flipCard);
  });
}
function flipCard() {
  if (flippedCards.length < 2 && this.classList.contains("active")) {
    let cardId = this.getAttribute("id");
    flippedCards.push(this);
    this.classList.remove("cardback");
    this.innerHTML = cardsArray[cardId].icon;
    if (flippedCards.length == 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}
function checkMatch() {
  const card1Id = flippedCards[0].getAttribute("id");
  const card2Id = flippedCards[1].getAttribute("id");
  if (cardsArray[card1Id].name === cardsArray[card2Id].name) {
    flippedCards[0].style.border = "none";
    flippedCards[0].style.backgroundColor = "blue";
    flippedCards[0].innerHTML = "";
    flippedCards[0].classList.remove("actove");
    flippedCards[1].style.border = "none";
    flippedCards[1].style.backgroundColor = "blue";
    flippedCards[1].innerHTML = "";
    flippedCards[1].classList.remove("actove");
    matchedCounts++;
    checkGameOver();
  } else {
    flippedCards[0].innerHTML = "";
    flippedCards[0].classList.add("cardback");
    flippedCards[1].innerHTML = "";
    flippedCards[1].classList.add("cardback");
  }
  flippedCards = [];
}
function checkGameOver() {
  if (matchedCounts === cardsArray.length / 2) {
    while (memoryCard.firstChild) {
      memoryCard.removeChild(memoryCard.firstChild);
    }
    memoryCard.innerHTML = "You Won";
    memoryCard.classList.remove("game");
    memoryCard.classList.add("Won");
  }
}
