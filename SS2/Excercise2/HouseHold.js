import Product from "./Product.js";

class HouseHold extends Product {
  constructor(id, name, price, maker, date, persit) {
    super(id, name, price, maker, date);
    this.persit = persit;
    this.disCount = 0.1;
  }
}

export default HouseHold;
