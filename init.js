<script type="module">
  import {refillButton} from './refillButton.mjs';
  {/* // Or the extension could be */}
  {/* just `.js` */}
</script>;
class CoffeeMaker {
  constructor(milkTank, waterTank, coffeePodBox) {
    this.milkTank = milkTank;
    this.waterTank = waterTank;
    this.coffeePodBox = coffeePodBox;
  }
  dispense(coffeeType) {
    // coffeeType is milk
    if (coffeeType === "milk") {
      this.coffeePodBox.getPods(1);
      this.milkTank.getMilk(250);
      mug.innerHTML = "here is your Coffee";
      contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;
    }
    // coffee type is water
    if (coffeeType === "water") {
      this.coffeePodBox.getPods(1);
      console.log(this.coffeePodBox);
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

  refillMilk() {
    this.milkTank.refill(1000);
    contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;
  }

  refillWater() {
    this.waterTank.refill(1000);
    contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`;

    // return (contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left, ${this.milkTank.milkQuantity} ml of milk left, ${this.coffeePodBox.numberOfPods}`);
  }
  refillCoffeePods() {
    return;
  }
}

class MilkTank {
  constructor(milkQuantity) {
    this.milkQuantity = milkQuantity;
  }
  // getMilk() method
  getMilk(quantity) {
    if (this.milkQuantity < 250) {
      this.milkQuantity;
    } else {
      this.milkQuantity = this.milkQuantity - quantity;
      return quantity;
    }
  }

  refill(qty) {
    return (this.milkQuantity = qty);
  }
}

class WaterTank {
  constructor(waterQuantity) {
    this.waterQuantity = waterQuantity;
  }
  refill(qty) {
    return (this.waterQuantity = qty);
  }
  // getWater() method
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
  getPods(qty) {
    this.numberOfPods = this.numberOfPods - qty;
    return this.numberOfPods;
  }
}
// milkTank instance
let milkTank = new MilkTank(1000);

// water container instance
let waterTank = new WaterTank(1000);
console.log(milkTank);

// coffeePod box instance
let coffeePodBox = new CoffeePodBox(200);

// coffee maker instance
let coffeeMc = new CoffeeMaker(milkTank, waterTank, coffeePodBox);

let mug = document.getElementById("mugContainer");
let contentLeft = document.getElementById("contentLeft");

contentLeft.innerText = `${coffeeMc.waterTank.waterQuantity} ml of water left,${coffeeMc.milkTank.milkQuantity} ml of milk left, ${coffeeMc.coffeePodBox.numberOfPods}`;

let dispenseBtn = document
  .getElementById("dispenseBtn")
  .addEventListener("click", handleOnDispenseCoffeeBtnClick);

function handleOnDispenseCoffeeBtnClick() {
  coffeeMc.dispense("milk");
  contentLeft.innerText = `${coffeeMc.waterTank.waterQuantity} ml of water left, ${coffeeMc.milkTank.milkQuantity} ml of milk left, ${coffeeMc.coffeePodBox.numberOfPods}`;
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
