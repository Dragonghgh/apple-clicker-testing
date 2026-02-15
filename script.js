let apples = 0;

let farmers = 0;
let trees = 0;
let factories = 0;

const appleText = document.getElementById("apples");

document.getElementById("apple").onclick = () => {
  apples++;
  updateUI();
};

function buyFarmer() {
  if (apples >= 50) {
    apples -= 50;
    farmers++;
    updateUI();
  }
}

function buyTree() {
  if (apples >= 250) {
    apples -= 250;
    trees++;
    updateUI();
  }
}

function buyFactory() {
  if (apples >= 1000) {
    apples -= 1000;
    factories++;
    updateUI();
  }
}

setInterval(() => {
  apples += farmers * 1;
  apples += trees * 5;
  apples += factories * 20;
  updateUI();
}, 1000);

function updateUI() {
  appleText.innerText = `${apples} Apples`;
  document.getElementById("farmers").innerText = farmers;
  document.getElementById("trees").innerText = trees;
  document.getElementById("factories").innerText = factories;
}
