class CoffeeMaker {
  constructor(milkTank, waterTank, coffeePodBox) {
    this.milkTank = milkTank;
    this.waterTank = waterTank;
    this.coffeePodBox = coffeePodBox;
  }
  dispense(coffeeType) {
    if (coffeeType === "milk") {
      this.milkTank.getMilk(250);
      mug.innerHTML = "here is your Coffee";
      contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;
      alert("low milk press refill");
    }

    if (coffeeType === "water") {
      this.waterTank.getWater(250);
      if (this.waterTank.waterQuantity < 250) {
        mug.innerHTML = "low water press refill";
        contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;
        alert("low on water press refill");
      } else {
        mug.innerHTML = "enjoy your coffee";
        contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;
      }
    }
  }

  refillMilk(milkTank) {}
  refillWater() {
    console.log(this.waterTank);
    return this.waterTank.refill(1000);
  }
  refillCoffeePods() {
    return;
  }
}

class MilkTank {
  constructor(milkQuantity) {
    this.milkQuantity = milkQuantity;
  }

  getMilk(quantity) {
    this.milkQuantity = this.milkQuantity - quantity;
    return quantity;
  }

  refill() {
    return;
  }
}

class WaterTank {
  constructor(waterQuantity) {
    this.waterQuantity = waterQuantity;
  }
  refill(qty) {
    return (this.waterQuantity = qty);
  }
  getWater(qty) {
    if (this.waterQuantity < 250) {
      return this.waterQuantity;
    } else {
      this.waterQuantity = this.waterQuantity - qty;
      return this.waterQuantity;
    }
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

let milkContainer = new MilkTank(1000);

let waterContainer = new WaterTank(1000);
console.log(milkContainer);

let podBox = new CoffeePodBox(200);

let coffeeMc = new CoffeeMaker(milkContainer, waterContainer, podBox);

let mug = document.getElementById("mugContainer");
let contentLeft = document.getElementById("contentLeft");
let dispenseBtn = document
  .getElementById("dispenseBtn")
  .addEventListener("click", handleOnDispenseCoffeeBtnClick);

function handleOnDispenseCoffeeBtnClick() {
  coffeeMc.dispense("milk");
  console.log(coffeeMc);
}

let blackCoffee = document
  .getElementById("blackCoffee")
  .addEventListener("click", handleOnBlackCoffeeBtn);
function handleOnBlackCoffeeBtn() {
  coffeeMc.dispense("water");
}

let refillBtn = document
  .getElementById("refillBtn")
  .addEventListener("click", handleClickOnRefillBtn);

function handleClickOnRefillBtn() {
  coffeeMc.refillWater();
}
