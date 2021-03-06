/* auxiliary variables */
let choices = 0;
let food = 0;
let drink = 0;
let dessert = 0;

/* Setting prices and generate_msg of the options there are selected */
let food_price = 0;
let drink_price = 0;
let dessert_price = 0;

let food_name = null;
let drink_name = null;
let dessert_name = null;

/* Selection functions */

function selectFood(value) {
  const section_food = document.querySelector(".foods");
  if (food === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    food = 1;
    choices += 1;
  } else {
    const selected_element = section_food.querySelector(".click");
    selected_element.classList.remove("click");
    let check_mark = selected_element.querySelector(".option-footer img");
    check_mark.remove();
    check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "chicken") {
    food_price = 14.9;
    food_name = "Frango Yin Yang";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<button class='request_ready' onclick='send_msg()'>Fechar pedido</button>`;
  }
}

function selectDrink(value) {
  const section_drink = document.querySelector(".drinks");
  if (drink === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    drink = 1;
    choices += 1;
  } else {
    const selected_element = section_drink.querySelector(".click");
    selected_element.classList.remove("click");
    let check_mark = selected_element.querySelector(".option-footer img");
    check_mark.remove();
    check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "coke") {
    drink_price = 4.9;
    drink_name = "Coquinha Gelada";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<button class='request_ready' onclick='send_msg()'>Fechar pedido</button>`;
  }
}

function selectDessert(value) {
  const section_dessert = document.querySelector(".desserts");
  if (dessert === 0) {
    const check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
    dessert = 1;
    choices += 1;
  } else {
    const selected_element = section_dessert.querySelector(".click");
    selected_element.classList.remove("click");
    let check_mark = selected_element.querySelector(".option-footer img");
    check_mark.remove();
    check_mark = value.querySelector(".option-footer");
    check_mark.innerHTML += '<img src="img/checkmark-circle.svg" alt="">';
    value.classList.add("click");
  }

  if (value.id === "pudim") {
    dessert_price = 7.9;
    dessert_name = "Pudim";
  }

  if (choices === 3) {
    const request = document.querySelector("footer");
    request.innerHTML = `<button class='request_ready' onclick='send_msg()'>Fechar pedido</button>`;
  }
}

/* Generating msg */

function send_msg() {
  const first_name = prompt("Digite seu nome:");
  const adress = prompt("Digite seu endere??o:");
  const number = "5581997276968";
  const msg = generate_msg(
    food_price,
    drink_price,
    dessert_price,
    first_name,
    adress
  );
  window.open(`https://wa.me/${number}?text=${msg}`);
}

function generate_msg(
  food_value,
  drink_value,
  dessert_value,
  client_name,
  client_adress
) {
  const total = (food_value + drink_value + dessert_value).toFixed(2);
  return encodeURIComponent(
    `Ol??, gostaria de fazer o *pedido:*\n*- Prato:*  ${food_name}\n*- Bebida:*  ${drink_name}\n*- Sobremesa:*  ${dessert_name}\n*Total:* R$ ${total}\n \n*Nome:* ${client_name}\n*Endere??o:* ${client_adress}`
  );
}
