// array of products

const products = [
    {name:"headphones",category:"electronics",price:99.99,inventory:4},
    {name:"gucci belt",category:"apparel",price:499.99,inventory:3},
    {name:"banana",category:"groceries",price:2.99,inventory:6},
    {name:"Dog",category:"default",price:2200.00,inventory:7},
    {name:"Vacuum Filter",category:"household",price:20.00,inventory:3},
];

// for...of that cycles through products and applies dynamic discount

for (const product of products){
    let discount = 0;

    switch (product.category){
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }
};

// if...else if additional discounts
let customerType
//for... while checkout

//for...in log

//object.entries()