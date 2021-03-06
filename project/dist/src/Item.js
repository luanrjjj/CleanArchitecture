"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(idItem, category, description, price, width = 0, height = 0, length = 0, weigth = 0) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
        this.width = width;
        this.height = height;
        this.length = length;
        this.weigth = weigth;
    }
    getVolume() {
        return this.width / 100 * this.height / 100 * this.length / 100;
    }
    getDensity() {
        return this.weigth / this.getVolume();
    }
    getFreight() {
        const freight = 1000 * this.getVolume() * (this.getDensity() / 100);
        return (freight < 10) ? 10 : freight;
    }
}
exports.default = Item;
