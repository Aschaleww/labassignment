let db = [{ id: 1, name: "NodeJs", price: 5, image: "https://shorturl.at/lvwAR", stock: 10 },
{ id: 2, name: "Apple", price: 20, image: "https://shorturl.at/kSVW1", stock: 8 },
{ id: 3, name: "HP", price: 10, image: "https://shorturl.at/oxzG8", stock: 6 },
{ id: 4, name: "React Native", price: 30, image: "https://shorturl.at/jklAJ", stock: 7 }];
let counter = 0;

class Product {
  constructor(id, name, price, image, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;

    this.stock = stock;
  }
  save() {
    this.id = ++counter; //start with 1;
    db.push(this);
    return this;
  }
  edit() {
    const index = db.findIndex((prod) => prod.id == this.id);
    db.splice(index, 1, this);
    return this;
  }
  static getAll() {
    return db;
  }

  static getById(prodId) {
    const index = db.findIndex((prod) => prod.id == prodId);
    return db[index];
  }

  static deleteById(prodId) {
    const index = db.findIndex((prod) => prod.id == prodId);
    const deletedProd = db[index];
    db.splice(index, 1);
    return deletedProd;
  }

  static checkout(cart) {
    cart.forEach(item => {
      let p = Product.getById(item.id);
      p.stock -= item.quantity;
      new Product(p.id, p.name, p.price, p.image, p.stock).edit();
    });
  }
  // db[0] = new Product (1, "string", "value", 9);
};

module.exports = Product;