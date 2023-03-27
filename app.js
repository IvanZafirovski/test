// const card = document.querySelector(".test");

// setInterval(() => {
//   const textInput = document.querySelector(".input");

//   card.style.backgroundColor = textInput.value;
// }, 10);

const cardAll = document.querySelectorAll(".test");

cardAll.forEach((card) => {
  setInterval(() => {
    const textInput = document.querySelector(".input");

    card.style.backgroundColor = textInput.value;
  }, 10);
});
