const card = document.querySelector(".test-one");

setInterval(() => {
  const textInput = document.querySelector(".input-one");
  card.style.backgroundColor = textInput.value;
}, 10);

const cardAll = document.querySelectorAll(".test");

cardAll.forEach((card) => {
  setInterval(() => {
    const textInput = document.querySelector(".input");
    card.style.backgroundColor = textInput.value;
  }, 10);
});

const cardSecondRow = document.querySelectorAll(".test-two");

cardSecondRow.forEach((card) => {
  setInterval(() => {
    const textInput = document.querySelector(".input-two");
    card.style.backgroundColor = textInput.value;
  }, 10);
});
