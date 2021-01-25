import Product from "./Product.js";
import Clothes from "./Clothes.js";
import Food from "./Food.js";
import HouseHold from "./HouseHold.js";

class ProductManage {
  constructor(doanhSoBan, chiPhiNhap, listHang) {
    this.doanhSoBan = doanhSoBan;
    this.chiPhiNhap = chiPhiNhap;
    this.listHang = listHang;
  }

  import(product) {
    this.listHang.push(product);
    this.chiPhiNhap = this.chiPhiNhap + product.price;
    this.checkMoney();
  }

  banHang(product) {
    this.listHang.splice(
      this.listHang.findIndex((i) => {
        i.id === product.id;
      })
    );
    this.doanhSoBan = this.doanhSoBan + product.price;
    this.checkMoney();
  }

  checkMoney() {
    console.log(`Doanh so Ban ${this.doanhSoBan}`);
    console.log(`Chi Phi Nhap ${this.chiPhiNhap}`);
  }
}

const productManage1 = new ProductManage(0, 0, []);
const yakut = new Food(
  "food01",
  "yakut",
  12,
  "FoodCorn",
  "12/12/1990",
  "mango"
);
const jeans = new Clothes(
  "cl01",
  "jeansblack",
  21,
  "Drza",
  "21/2/1989",
  "euro",
  "jean"
);
const chair = new HouseHold(
  "hh01",
  "chairPro",
  32,
  "Furiture",
  "22/12/1998",
  "5year"
);

productManage1.import(jeans);
productManage1.import(chair);
productManage1.import(yakut);
productManage1.banHang(jeans);
