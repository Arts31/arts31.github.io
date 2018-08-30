function updateOrder() {
	const PROCENTS = 19;
	var rubs =
	parseInt(document.getElementById('rub').value);
	var total = rubs + rubs / PROCENTS;
	if (isNaN(rubs))
		rubs = 0;
	document.getElementById('total').value = total.toFixed(2) + " руб.";
}