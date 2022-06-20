const all_parrots = [
  `bobrossparrot.gif`,
  `explodyparrot.gif`,
  `fiestaparrot.gif`,
  `metalparrot.gif`,
  `revertitparrot.gif`,
  `tripletsparrot.gif`,
  `unicornparrot.gif`,
];
function comparador() {
  return Math.random() - 0.5;
}
let plays = 0;
let game_parrots = [];
let click = `turn(this)`;
let timersec = 0;
let timermin = 0;
const count = document.querySelector(`header p`);

start();
function start() {
  timersec = 0;
  timermin = 0;
  setInterval(() => {
    timersec++;
    if (timersec === 60) {
      timersec = 0;
      timermin++;
    }
    count.textContent = `${timermin < 10 ? `0${timermin}` : timermin}:${
      timersec < 10 ? `0${timersec}` : timersec
    }`;
  }, 1000);
  all_parrots.sort(comparador);
  game_parrots = [];
  let cards_number = prompt("Com quantas cartas quer jogar?");
  while (cards_number < 4 || cards_number > 14 || cards_number % 2 != 0) {
    cards_number = prompt("Com quantas cartas quer jogar?");
  }

  for (let i = 0; i < cards_number / 2; i++) {
    game_parrots.push(all_parrots[i]);
    game_parrots.push(all_parrots[i]);
  }
  game_parrots.sort(comparador);

  const game_table = document.querySelector(".container");
  game_table.innerHTML = ``;
  for (let i = 0; i < cards_number; i++) {
    game_table.innerHTML += `<div class="card" name="${game_parrots[i]}" onclick="${click}" data-identifier="card">
            <img src="img/front.svg" data-identifier="back-face" alt="">
        </div>`;
  }
  plays = 0;
}

function turn(element) {
  plays++;
  const flipped_card = document.querySelector(".clicked");
  element.classList.add("virada");
  element.classList.add("clicked");
  const img = element.firstElementChild;
  img.src = `img/${element.getAttribute(`name`)}`;
  element.setAttribute(`onclick`, ``);
  if (flipped_card !== null) {
    const all_cards = document.querySelectorAll(`.card`);
    all_cards.forEach((value) => value.setAttribute(`onclick`, ``));
    setTimeout(() => {
      check(element, flipped_card, all_cards);
    }, 1000);
  }
}

function check(element1, element2, cards) {
  if (element1.getAttribute(`name`) === element2.getAttribute(`name`)) {
    game_parrots = game_parrots.filter((value) => {
      return element1.getAttribute(`name`) !== value;
    });
    if (game_parrots.length === 0) {
      alert(`Você ganhou em ${plays} jogadas!`);
      const restart = prompt(`Gostaria de reiniciar a partida? (sim ou não)`);
      if (restart === `sim`) {
        return start();
      }
    }
  } else {
    const img1 = element1.firstElementChild;
    const img2 = element2.firstElementChild;
    element1.setAttribute(`onclick`, `turn(this)`);
    element1.classList.remove("virada");
    element2.setAttribute(`onclick`, `turn(this)`);
    element2.classList.remove("virada");
    img1.src = `img/front.svg`;
    img2.src = `img/front.svg`;
  }
  cards.forEach((value) => value.setAttribute(`onclick`, `${click}`));
  element1.classList.remove("clicked");
  element2.classList.remove("clicked");
}
