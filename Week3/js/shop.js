var customerName ="Bathe";
var price =10;
var quantity=2;
var totalPrice= price*quantity;

//var customerElement = document.getElementByid("customer-name");
//customerElement.textContent =customerName;

var products= [
"Brooklyn T-Shirt White ",
"Brooklyn T-Shirt Black ",
"Apple Watch ",
"Android Phone "
];
products.length;//4

var prices= [10, 10, 199, 159];

var productsText ="";
var productsElement = document.getElementById("product-list");
productsText ="<li class='list-group-item'><span class='badge'>$"+prices[0]+"</span>" + products[0]+ "</li>";
productsElement.innerHTML = productsText;

 totalPrice = prices[0] +prices[1] +prices[2] +prices[3];
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;
