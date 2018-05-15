function Phone(brand, price, color, quality) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.quality = quality;
}
var iPhone6S = new Phone("Apple", 2250, "silver", "new");
var SamsungGalaxyS6 = new Phone("Samsung", 100, "black", "old");
var OnePlusOne = new Phone("One", 350, "white", "old");
var Nokia = new Phone("First", 230, "blue", "new");
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and quality is " + this.quality + ".");
};
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
Nokia.printInfo();