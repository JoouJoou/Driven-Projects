let username = prompt(`Digite seu nome:`);
let to = "Todos";
const form = document.querySelector(`input`);
form.addEventListener(`keypress`, keysend);

function checkName() {
  username = prompt(`Digite seu nome:`);
  axios
    .post(`https://mock-api.driven.com.br/api/v6/uol/participants`, {
      name: username,
    })
    .then(() => main())
    .catch(() => checkName());
}

checkName();

function main() {
  setInterval(
    () =>
      axios.post(`https://mock-api.driven.com.br/api/v6/uol/status`, {
        name: username,
      }),
    5000
  );
  render_msg();
}

function render_msg() {
  axios
    .get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then((response) => {
      const chat = document.querySelector("main");
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

function keysend(event) {
  if (event.key === `Enter`) {
    send_msg();
  }
}
function send_msg() {
  let text = document.querySelector("input");
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
