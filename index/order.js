function updateorder() {
	const one_3 = 550;
	const one_5 = 500;
	const two_1 = 620;
	const two_4 = 300;
	const five_2 = 500;
	const pizza = 1200;
	var num_one_3 =
	document.getElementById('1/3').value;
	var num_one_5 =
	document.getElementById('1/5').value;
	var num_two_1 =
	document.getElementById('2/1').value;
	var num_two_4 =
	document.getElementById('2/4').value;
	var num_five_2 =
	document.getElementById('5/2').value;
	var num_pizza =
	document.getElementById('pizza').value
	if (isNaN(num_one_3)) {
		num_one_3 = 0;
	}
	if (isNaN(num_one_5)) {
		num_one_5 = 0;
	}
	if (isNaN(num_two_1)) {
		num_two_1 = 0;
	}
	if (isNaN(num_two_4)) {
		num_two_4 = 0;
	}
	if (isNaN(num_five_2)) {
		num_five_2 = 0;
	}
	if (isNaN(pizza)) {
		num_pizza = 0;
	}
	var total = num_one_3 * one_3 + num_one_5 * one_5 + num_two_1 * two_1 + num_two_4
	* two_4 + num_five_2 * five_2 + num_pizza;
	document.getElementById('total').value = "₽ " + total;


}