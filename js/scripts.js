function Phone(brand, price, color, quality) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.quality = quality;
	var self = this;
}
var iPhone6S = new Phone("Apple", 2250, "silver", "new");
var samsungGalaxyS6 = new Phone("Samsung", 100, "black", "old");
var onePlusOne = new Phone("One", 350, "white", "old");
var nokia = new Phone("First", 230, "blue", "new");
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and quality is " + this.quality + ".");
	function applyDiscount(discount) {
		this.discount = discount;
		console.log("The phone brand is " + self.brand + ", the discounted price is " + ( this.discount * self.price / 100 ) + "."); 
	}
}
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
nokia.printInfo();

nokia.applyDiscount(50);
applyDiscount(50);
nokia.printInfo();

Phone.printInfo();
Phone.applyDiscount(50);
Phone.printInfo();

/*
1) nazwy zmiennych zapisz z małej litery.
2) Dopisz do telefonu funkcję applyDiscount z parametrem, która będzie obniżać cenę telefonu. Funkcja ma modyfikować cenę telefonu w taki sposób, że wartość telefonu zostanie obniżona o podaną kwotę podaną jako parametr. Aby sprawdzić poprawność działania kodu, wypisz dane telefonu, zastosuj obniżkę i ponownie wypisz dane telefonu. Powinny pokazać się 2 różne wartości.Generalnie rzecz ujmując, po wywołaniu odpowiednio polecen printInfo, applyDiscount i ponownie printInfo, cena telefonu powinna ulec zmianie:
var phone = new Phone(…, 1000, …); // ustawiamy cenę na 1000
phone.printInfo(); // price = 1000
phone.applyDiscount(100); // nic się nie wypisuje
phone.printInfo(); // price = 900 
*/
