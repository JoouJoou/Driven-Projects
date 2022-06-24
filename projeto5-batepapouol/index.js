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
}
