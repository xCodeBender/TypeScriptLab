"use strict";
exports.__esModule = true;
var M1 = {
    name: "Kilimanjar",
    height: 19341
};
var M2 = {
    name: "Everest",
    height: 29029
};
var M3 = {
    name: "Denali",
    height: 20310
};
var mount = [
    M1,
    M2,
    M3
];
function findNameOfTallestMountain(mountains) {
    var result = {
        name: "",
        height: 0
    };
    mountains.forEach(function (mt) {
        if (mt.height > result.height) {
            result = mt;
        }
    });
    return result;
}
console.log(findNameOfTallestMountain(mount));
var P1 = {
    name: "patience",
    price: 110
};
var P2 = {
    name: "understanding",
    price: 120
};
var P3 = {
    name: "communication",
    price: 130
};
var P4 = {
    name: "peace",
    price: 140
};
var products = [
    P1,
    P2,
    P3,
    P4
];
function calcAverageProductPrice(products) {
    var total = 0;
    var average = 0;
    products.forEach(function (i) {
        total += i.price;
    });
    average = (total / products.length);
    return average;
}
;
var average = calcAverageProductPrice(products);
console.log(average);
var i1 = {
    quantity: 10,
    product: {
        name: "motor",
        price: 10
    }
};
var i2 = {
    quantity: 4,
    product: {
        name: "sensor",
        price: 12.50
    }
};
var i3 = {
    quantity: 20,
    product: {
        name: "LED",
        price: 1
    }
};
var i4 = {
    quantity: 10,
    product: {
        name: "motor",
        price: 10
    }
};
var items = [
    i1,
    i2,
    i3,
    i4
];
function CalcInventoryValue(items) {
    var total = 0;
    items.forEach(function (p) {
        total += p.product.price * p.quantity;
    });
    return total;
}
var totalItems = CalcInventoryValue(items);
console.log(totalItems);
