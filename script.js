let apples = 0;
let farmers = 0;
let farmerCost = 50;

const appleText = document.getElementById("apples");
const appleBtn = document.getElementById("apple");
const buyFarmerBtn = document.getElementById("buyFarmer");
const farmerText = document.getElementById("farmers");

appleBtn.onclick = () => {
  apples++;
  updateUI();
};

buyFarmerBtn.onclick = () => {
  if (apples >= farmerCost) {
    apples -= farmerCost;
    farmers++;
    farmerCost = Math.floor(farmerCost * 1.5);
    buyFarmerBtn.innerText = `Buy (${farmerCost} 🍎)`;
    updateUI();
  }
};

setInterval(() => {
  apples += farmers;
  updateUI();
}, 1000);

function updateUI() {
  appleText.innerText = `Apples: ${apples}`;
  farmerText.innerText = farmers;
}
