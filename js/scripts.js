function Phone(brand, price, color, quality) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.quality = quality;
}
var iPhone6S = new Phone("Apple", 2250, "silver", "new");
var samsungGalaxyS6 = new Phone("Samsung", 100, "black", "old");
var onePlusOne = new Phone("One", 350, "white", "old");
var nokia = new Phone("First", 230, "blue", "new");
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and quality is " + this.quality + ".");
}
Phone.prototype.applyDiscount = function(discount) {
	this.discount = this.price - discount
}
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
nokia.printInfo();

iPhone6S.applyDiscount(250);
iPhone6S.printInfo();
samsungGalaxyS6.applyDiscount(100);
onePlusOne.applyDiscount(50);
nokia.applyDiscount(30);