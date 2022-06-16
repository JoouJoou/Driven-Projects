const all_parrots = [
  `<img src="img/bobrossparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/explodyparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/fiestaparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/metalparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/revertitparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/tripletsparrot.gif" data-identifier="front-face" alt="">`,
  `<img src="img/unicornparrot.gif" data-identifier="front-face" alt="">`,
];
function comparador() {
  return Math.random() - 0.5;
}
all_parrots.sort(comparador);

let cards_number = prompt("Com quantas cartas quer jogar?");
while (cards_number < 4 || cards_number > 14 || cards_number % 2 != 0) {
  cards_number = prompt("Com quantas cartas quer jogar?");
}

const game_table = document.querySelector(".container");
for (let i = 0; i < cards_number; i++) {
  game_table.innerHTML += `<div class="card" id="${i}" onclick="turn(this)" data-identifier="card">
            <img src="img/front.svg" data-identifier="back-face" alt="">
        </div>`;
}
const game_parrots = [];
for (let i = 0; i < cards_number / 2; i++) {
  game_parrots.push(all_parrots[i]);
  game_parrots.push(all_parrots[i]);
}
game_parrots.sort(comparador);
let clicked_cards = 0;
const current_cards = [];
function turn(element) {
  clicked_cards += 1;
  console.dir(element);
  element.classList.add("virada");
  element.onclick = null;
  console.dir(element);
  element.innerHTML = game_parrots[element.id];
  current_cards.push(game_parrots[element.id]);
  if (clicked_cards === 2) {
    if (current_cards[0] === current_cards[1]) {
      current_cards.splice(0, current_cards.length);
    }
  }
}
