//Clock
const currentTime = () => {
  const el = document.querySelector("h1");
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  /// contition ? true, : false
  hh = hh < 10 ? `${hh}` : hh;
  mm = mm < 10 ? `${mm}` : mm;
  ss = ss < 10 ? `${ss}` : ss;

  let time = `${hh}:${mm}:${ss}`;
  el.innerText = time;
};
currentTime();
setInterval(currentTime, 1000);

// RAnge
const sectionSecondMaster = document.querySelector(".section-second--master");
const range = document.createElement("input");
range.type = "range";
range.max = 10;
range.value = 0;
const paragraph = document.createElement("p");
paragraph.innerHTML = "How awesome are you?";
const sectionAwesome = document.createElement("div");
const stars = document.createElement("div");

range.classList.add("range");
paragraph.classList.add("awesome-paragraph");
sectionAwesome.classList.add("section-awesome");
stars.classList.add("stars");

sectionSecondMaster.appendChild(sectionAwesome);
sectionAwesome.append(paragraph, range, stars);

range.oninput = addStars;
function addStars() {
  stars.innerText = "";
  for (let i = 0; i < this.value; i++) {
    stars.append("⭐");
  }
}

/// Dark Light

const btns = document.getElementsByName("r");

for (const btn of btns) {
  btn.onclick = changeBg;
}
function changeBg() {
  // const sectionRadio = document.querySelector(".section-radio");
  // sectionRadio.style.background = this.value;
  document.body.style.background = this.value;
}

// Changing color
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
