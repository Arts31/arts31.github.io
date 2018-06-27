function UpdateOrder() {
	const PRICE = 4;
	var number =
	document.getElementById('numbers').value;
	var total = number * PRICE;
	document.getElementById('total').value = total + " руб.";
}