class CoffeeMaker {
  constructor(milkTank, waterTank, coffeePodBox) {
    this.milkTank = milkTank;
    this.waterTank = waterTank;
    this.coffeePodBox = coffeePodBox;
  }
  dispense(coffeeType) {
    if (coffeeType === "milk") {
      return "here is your Coffee";
    }
    if (coffeeType === "water") {
      return "here is your black coffee";
    }
  }
  refillMilk(milkTank) {
    if (milkTank === 250) {
      mug.style.display = "none";
      let machine = document.getElementById("machine");
      let refillImg = document.createElement("img");
      refillImg.src = "./refill.gif";
      machine.append(refillImg);
    }
  }
  refillWater(waterTank) {
    if (waterTank === 250) {
      alert("refill your water container");
    }
  }
  refillCoffeePods() {
    return;
  }
}

class MilkTank {
  constructor(milkQuantity) {
    this.milkQuantity = milkQuantity;
  }
  refill() {
    return;
  }
}

class WaterTank {
  constructor(waterQuantity) {
    this.WaterQuantity = waterQuantity;
  }
  refill() {
    return;
  }
}

class CoffeePodBox {
  constructor(numberOfPods) {
    this.numberOfPods = numberOfPods;
  }
  refill() {
    return;
  }
}
let coffeeMc = new CoffeeMaker(1000, 1000, 200);
console.log(coffeeMc);

let milkContainer = new MilkTank(1000);
console.log(milkContainer);

let waterContainer = new WaterTank(1000);
console.log(waterContainer);
let podBox = new CoffeePodBox(200);
console.log(podBox);

let dispenseBtn = document
  .getElementById("dispenseBtn")
  .addEventListener("click", handleOnDispenseCoffeeBtnClick);

let remainingMilk = milkContainer.milkQuantity;
let remainingPods = podBox.numberOfPods;
let mug = document.getElementById("mugContainer");
function handleOnDispenseCoffeeBtnClick() {
  if (coffeeMc.refillMilk(remainingMilk)) {
  } else {
    console.log(coffeeMc.dispense("milk"));
    remainingMilk = remainingMilk - 250;
    remainingPods = remainingPods - 1;
    console.log(remainingMilk);
    coffeeMc.milkTank = remainingMilk;
    coffeeMc.coffeePodBox = remainingPods;
    mug.innerHTML = "here is your capuccino";
    let coffeeImg = document.createElement("img");
    coffeeImg.src = "./coffee-capu.jpg";
    coffeeImg.classList = "coffeeImg";
    mug.append(coffeeImg);
    console.log(coffeeMc);
  }
}

let blackCoffee = document
  .getElementById("blackCoffee")
  .addEventListener("click", handleOnBlackCoffeeBtn);

let remainingWater = coffeeMc.waterTank;
console.log("remainingWater:", remainingWater);
function handleOnBlackCoffeeBtn() {
  if (coffeeMc.refillWater(remainingWater)) {
  } else {
    console.log(coffeeMc.dispense("water"));
    remainingWater = remainingWater - 250;
    console.log(remainingWater);
    coffeeMc.waterTank = remainingWater;
    remainingPods = remainingPods - 1;
    coffeeMc.coffeePodBox = remainingPods;
    let espressoImg = document.createElement("img");
    espressoImg.src = "./espresso.jpg";
    espressoImg.classList = "coffeeImg";
    mug.append(espressoImg);
    mug.innerHTML = "enjoy your espresso";
  }
  console.log(coffeeMc.dispense("water"));
}
