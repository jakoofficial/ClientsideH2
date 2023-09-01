class Player{
    balance: number;
    constructor(balance:number) {
        this.balance = balance;
    }
}

class Item {
    itemName: string; 
    sellPrice: number;
    constructor(itemName: string, sellInPrice: number) {
        this.itemName = itemName;
        this.sellPrice= sellInPrice;
    }

    sell(p:Player) {
        p.balance += this.sellPrice;
    }
}