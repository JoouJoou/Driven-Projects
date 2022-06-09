let choices = 0;
let food = 0;
let drink = 0;
let dessert = 0;

let food_price = 0;
let drink_price = 0;
let dessert_price = 0;

let food_name = null;
let drink_name = null;
let dessert_name = null;

const food_option = document.querySelectorAll(".food");
const drink_option = document.querySelectorAll(".drink");
const dessert_option = document.querySelectorAll(".dessert");

console.log(food_option);
console.log(document.querySelector(".food"));

function selectFood(value) {
  if (food === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    food = 1;
    choices += 1;
  } else {
    for (i of food_option) {
      console.log(i.classList.contains("click"));
      if (i.classList.contains("click") === true) {
        i.classList.remove("click");
        const check_mark = i.querySelector(".option-footer img");
        check_mark.remove();
      }
    }
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "chicken") {
    food_price = 14.9;
    food_name = "Frango Yin Yang";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<a href='https://wa.me/5581995442300?text=${generatemsg(
      food_price,
      drink_price,
      dessert_price
    )}'class='request_ready'><button class='request_ready'>Fechar pedido</button></a>`;
  }
}

function selectDrink(value) {
  if (drink === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    drink = 1;
    choices += 1;
  } else {
    for (i of drink_option) {
      console.log(i.classList.contains("click"));
      if (i.classList.contains("click") === true) {
        i.classList.remove("click");
        const check_mark = i.querySelector(".option-footer img");
        check_mark.remove();
      }
    }
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "coke") {
    drink_price = 4.9;
    drink_name = "Coquinha Gelada";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<a href='https://wa.me/5581995442300?text=${generatemsg(
      food_price,
      drink_price,
      dessert_price
    )}'class='request_ready'><button class='request_ready'>Fechar pedido</button></a>`;
  }
}

function selectDessert(value) {
  if (dessert === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    dessert = 1;
    choices += 1;
  } else {
    for (i of dessert_option) {
      console.log(i.classList.contains("click"));
      if (i.classList.contains("click") === true) {
        i.classList.remove("click");
        const check_mark = i.querySelector(".option-footer img");
        check_mark.remove();
      }
    }
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "pudim") {
    dessert_price = 7.9;
    dessert_name = "Pudim";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<a href='https://wa.me/558186946637?text=${generatemsg(
      food_price,
      drink_price,
      dessert_price
    )}'class='request_ready'><button class='request_ready'>Fechar pedido</button></a>`;
  }
}

function generatemsg(food_value, drink_value, dessert_value) {
  const total = (food_value + drink_value + dessert_value).toFixed(2);
  return encodeURIComponent(
    `Olá, gostaria de fazer o *pedido:*\n*- Prato:*  ${food_name}\n*- Bebida:*  ${drink_name}\n*- Sobremesa:*  ${dessert_name}\n*Total:* R$ ${total}`
  );
}
