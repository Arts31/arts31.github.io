function UpdateOrder() {
	const PRICE = 0.01;
	var number =
	document.getElementById('numbers').value;
	var total = number * PRICE;
	document.getElementById('total').value = total.toFixed(2);
}