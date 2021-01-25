import Product from "./Product.js";

class Food extends Product {
  constructor(id, name, price, maker, date, taste) {
    super(id, name, price, maker, date);
    this.taste = taste;
    this.disCount = 0.02;
  }
}

export default Food;
