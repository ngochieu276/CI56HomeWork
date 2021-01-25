import Product from "./Product.js";

class Clothes extends Product {
  constructor(id, name, price, maker, date, origin, material) {
    super(id, name, price, maker, date);
    this.origin = origin;
    this.material = material;
    this.disCount = 0.05;
  }
}

export default Clothes;
