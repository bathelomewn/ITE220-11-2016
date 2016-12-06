

	
var customerName ="Bathe";
var price =10;
var quantity=2;
var discount = 0;
var totalPrice= 0;

var customerElement = document.getElementById("customer-name");
customerElement.textContent =customerName;

var products= [
"Brooklyn T-Shirt White ",
"Brooklyn T-Shirt Black ",
"Apple Watch ",
"Android Phone "
];


var prices= [10, 10, 199, 159];

var productsText ="";
var productsElement = document.getElementById("product-list");

productsText +="<li class='list-group-item'><span class='badge'>$"+prices[0]+"</span>" + products[0]+ "</li>"; 
productsText+="<li class='list-group-item'><span class='badge'>$"+prices[1]+"</span>" + products[1]+ "</li>";
productsText+="<li class='list-group-item'><span class='badge'>$"+prices[2]+"</span>" + products[2]+ "</li>";
productsText+="<li class='list-group-item'><span class='badge'>$"+prices[3]+"</span>" + products[3]+ "</li>";
productsElement.innerHTML = productsText;




 totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
 discount = totalPrice * 0.25;
 var totalPriceDiscount = totalPrice - discount;

var totalPriceElement = document.getElementById("total-price");

totalPriceElement.textContent = totalPriceDiscount;

	var date = new Date();
	var n = date.getHours();

	if(n >= 6 && n <=11) {
		daytime = "Good morning";
	}else if(n >= 12 && n <= 18) {
		daytime= "Good afternoon";
	}else if (n >= 19 && n <= 23){
		daytime = "Good evening";
	}else{
		daytime ="Good sometimes";
	}

	var greeting = document.getElementById("day-time");
		greeting.textContent = daytime;