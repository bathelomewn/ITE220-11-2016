var shop ={
	customerName: "Bathelomew",
	totalPrice:0,
	products:[
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"

],
	prices: [10,10,199,159],
	displayCustomerName: function(){
		var customerElement=document.getElementById("customer-name");
		customerElement.textContent=this.customerName;
	},

displayProductList:function(){

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

},

calculateTotalPrice: function () {
	return(this.prices[0] +this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
},

displayTotalPrice: function(){
	this.totalPrice = this.calculateTotalPrice();
	var totalPriceElement=document.getElementById("total-price");
	totalPriceElement.textContent = this.totalPrice;
}
}

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();





 /*totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
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
		greeting.textContent = daytime;*/