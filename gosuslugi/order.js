function UpdateOrder() {
	const PRICE = 6.90;
	var number =
	document.getElementById('numbers').value;
	var total = number * PRICE;
	document.getElementById('total').value = total.toFixed(2);
}