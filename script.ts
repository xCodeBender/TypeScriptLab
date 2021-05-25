export{}
interface Mountain {
    name: string;
    height: number;
}

let M1: Mountain = {
    name:"Kilimanjar",
    height: 19341
};
let M2: Mountain = {
    name:"Everest",
    height: 29029,
};
let M3: Mountain = {
    name:"Denali",
    height: 20310,
}

let mount: Mountain[] = [
   M1,
   M2,
   M3
];

function findNameOfTallestMountain(mountains:Mountain[]):Mountain {
    let result: Mountain = {
        name:"",
        height: 0,
    };
    mountains.forEach(function(mt:Mountain){
        if(mt.height>result.height){
            result = mt;
        }
    });

    return result;
}

console.log(findNameOfTallestMountain(mount));

//Q2
interface Product {
    name: string;
    price: number;
}

let P1: Product = {
    name:"patience",
    price: 110
};

let P2: Product = {
    name:"understanding",
    price: 120
};

let P3: Product = {
    name:"communication",
    price: 130
};

let P4: Product = {
    name:"peace",
    price: 140
};

let products: Product[] = [
    P1,
    P2,
    P3,
    P4
];

function calcAverageProductPrice(products:Product[]): number
{
    let total: number = 0;
    let average: number = 0;
    products.forEach(function(i:Product){
        total += i.price;
    });
    average = (total/products.length);
    return average;

};

let average:number = calcAverageProductPrice(products);
console.log(average);

//Q3
interface  InventoryItem {
    product: Product;
    quantity: number;
}

let i1: InventoryItem = {
    quantity:10,
    product:
    {
        name:"motor",
        price:10
    }
};

let i2: InventoryItem = {
    quantity:4,
    product:
    {
        name:"sensor",
        price:12.50
    }
};

let i3: InventoryItem = {
    quantity:20,
    product:
    {
        name:"LED",
        price:1
    }
};

let i4: InventoryItem = {
    quantity:10,
    product:
    {
        name:"motor",
        price:10
    }
};

let items: InventoryItem[] = [
    i1,
    i2,
    i3,
    i4
];

function CalcInventoryValue(items:InventoryItem[]):number
{
    let total:number = 0;
    items.forEach(function(p:InventoryItem){
        total += p.product.price * p.quantity
    })
    return total;
}

let totalItems:number = CalcInventoryValue(items);
console.log(totalItems);