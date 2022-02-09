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
  refillMilk() {
    return;
  }
  refillWater() {
    return;
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
  constructor(WaterQuantity) {
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

let coffeeMc = new CoffeeMaker("1litre", "1litre", 200);
console.log(coffeeMc);

let dispenseBtn = document
  .getElementById("dispenseBtn")
  .addEventListener("click", handleOnDispenseCoffeeBtnClick);

function handleOnDispenseCoffeeBtnClick() {
  console.log(coffeeMc.dispense("water"));
}
