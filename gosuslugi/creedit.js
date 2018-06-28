function updateOrder() {
	const PROCENTS = 19;
	var rubs =
	parseInt(document.getElementById('rub').value);
	var total = rubs + rubs / PROCENTS;
	document.getElementById('total').value = total.toFixed(2) + " руб.";
}