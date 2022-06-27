const chat = document.querySelector(".input-chat");
chat.addEventListener(`keypress`, keysend_chat);
let to = "Todos";
let username = "";
const login = document.querySelector(".input-login");
const hide_chat = document.querySelectorAll(".hidden");
const hide_login = document.querySelector(".main-login");
login.addEventListener("keypress", keysend_login);

function button_color() {}

function checkName() {
  const promise = axios
    .post(`https://mock-api.driven.com.br/api/v6/uol/participants`, {
      name: username,
    })
    .then(() => {
      hide_chat.forEach((value) => {
        value.classList.remove("hidden");
      });

      hide_login.classList.add("hidden");
      main();
    })
    .catch((value) => {
      console.log(value);
      window.alert("Nome de usuário já existe");
    });
}

function main() {
  setInterval(
    () =>
      axios.post(`https://mock-api.driven.com.br/api/v6/uol/status`, {
        name: username,
      }),
    5000
  );
  render_msg();
  setInterval(() => render_msg(), 3000);
}

function keysend_login(event) {
  if (event.key === `Enter`) {
    send_login();
  }
}
function send_login() {
  const user = document.querySelector(".input-login");
  username = user.value;
  checkName();
}

function render_msg() {
  axios
    .get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then((response) => {
      const chat = document.querySelector(".main-chat");
      chat.innerHTML = "";
      response.data.forEach((value) => {
        if (value.type === "status") {
          chat.innerHTML += `<div class="status-msg">
            <h1>
                <span>${value.time}</span> <strong>${value.from} </strong>${value.text}
            </h1>
        </div>`;
        } else if (value.type === "message") {
          chat.innerHTML += `<div class="msg">
            <h1>
                <span>${value.time}</span> <strong>${value.from} </strong>para<strong> ${value.to}:</strong> ${value.text}
            </h1>
        </div>`;
        } else if (value.type === "private_message") {
          chat.innerHTML += `<div class="private-msg">
            <h1>
                <span>${value.time}</span> <strong>${value.from}</strong> reservadamente para<strong> ${value.to}:</strong> ${value.text}
            </h1>
        </div>`;
        }
      });
      chat.lastElementChild.scrollIntoView();
    });
}

function send_msg() {
  let text = document.querySelector(".input-chat");
  const obj = {
    from: username,
    to,
    text: text.value,
    type: "message",
  };
  axios
    .post("https://mock-api.driven.com.br/api/v6/uol/messages", obj)
    .then(render_msg);
  text.value = "";
}

function keysend_chat(event) {
  if (event.key === `Enter`) {
    send_msg();
  }
}
