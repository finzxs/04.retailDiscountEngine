// array of products

const products = [
    {name:"headphones",category:"electronics",price:99.99,inventory:4},
    {name:"gucci belt",category:"apparel",price:499.99,inventory:3},
    {name:"banana",category:"groceries",price:2.99,inventory:6},
    {name:"Dog",category:"default",price:2200.00,inventory:7},
    {name:"Vacuum",category:"household",price:200.00,inventory:3},
];

// for...of that cycles through products and applies dynamic discount

for (let product of products){
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
    let promoPrice = product.price * (1-discount);
};

// if...else if additional discounts

let customerType = ["regular","student","senior"];

let extraDiscount = 0;

if(customerType = "student"){
        extraDiscount = 0.05;};
    else if (customerType = "senior"){
        extraDiscount = 0.07;};
    else {
        extraDiscount = 0;}

//for or while loops for checkout

const customers = [
    {type:"regular", cart:["Vacuum","Dog"]},
    {type:"student", cart:["banana"]},
    {type:"senior", cart:["gucci belt","headphones","Vacuum"]},
];

for(let i = 0; i < customers.length; i++){
    let product = products[i];
    let subtotal = 0;

    for(let item of customer.cart)
}