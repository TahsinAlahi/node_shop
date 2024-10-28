const path = require("path");
const fsPromise = require("fs").promises;
const rootDir = require("../util/rootDir");

class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    const filePath = path.join(rootDir, "data", "products.json");

    let products = [];
    try {
      const content = await fsPromise.readFile(filePath, "utf-8");
      products = JSON.parse(content);
      products.push(this);
    } catch (err) {
      products = [this];
    } finally {
      await fsPromise.writeFile(filePath, JSON.stringify(products));
    }
  }

  static async fetchAllProducts() {
    const filePath = path.join(rootDir, "data", "products.json");

    try {
      const content = await fsPromise.readFile(filePath, "utf-8");

      return JSON.parse(content);
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

module.exports = { Product };
