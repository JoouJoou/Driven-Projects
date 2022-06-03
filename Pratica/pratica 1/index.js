const button = document.querySelectorAll(".button");
console.log(button);
function darkMode(value) {
  const body = document.querySelector("body");
  const p = document.querySelectorAll("p");
  const ul = document.querySelectorAll("ul");
  const span = document.querySelectorAll("span");
  if (value.innerText === "Light Mode") {
    value.innerText = "Dark Mode";
  } else {
    value.innerText = "Light Mode";
  }
  body.classList.toggle("dark");
  for (i of p) {
    i.classList.toggle("dark-text");
  }
  for (i of ul) {
    i.classList.toggle("dark-text");
  }
  for (i of span) {
    i.classList.toggle("dark-text");
  }
}
