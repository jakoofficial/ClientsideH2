"use strict";
var Player = /** @class */ (function () {
    function Player(balance) {
        this.balance = balance;
    }
    return Player;
}());
var Item = /** @class */ (function () {
    function Item(itemName, sellInPrice) {
        this.itemName = itemName;
        this.sellPrice = sellInPrice;
    }
    Item.prototype.sell = function (p) {
        p.balance += this.sellPrice;
    };
    return Item;
}());
