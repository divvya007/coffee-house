class CoffeeMaker {
  constructor(milkTank, waterTank, coffeePodBox) {
    this.milkTank = milkTank;
    this.waterTank = waterTank;
    this.coffeePodBox = coffeePodBox;
  }
  dispense(coffeeType) {
    // if (coffeeType === "milk") {
    //   this.milkTank.getMilk(250);
    //   mug.innerHTML = "here is your Coffee";
    //   contentLeft.innerText = `${this.milkTank.milkQuantity} ml of milk left`;
    // }

    if (coffeeType === "water") {
      this.waterTank.getWater(250);
      mug.innerHTML = "enjoy your coffee";
      contentLeft.innerText = `${this.waterTank.waterQuantity} ml of water left`;
    }
  }
  refillMilk(milkTank) {
    // remainingPods = remainingPods - 1;
    if (milkTank === 250) {
      alert("refill your milk container");
      //   mug.style.display = "none";
      //   let machine = document.getElementById("machine");
      //   let refillImg = document.createElement("img");
      //   refillImg.src = "./refill.gif";
      //   machine.innerHTML = null;
      //   machine.append(refillImg);
    } else {
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
  refill() {
    return;
  }
  getWater(qty) {
    if (this.waterQuantity <= 250) {
      alert("refill your water");
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
// console.log(coffeeMc);

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
// debugger;
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
