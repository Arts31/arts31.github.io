function updateorder() {
	const one_1 = 790;
	const four_1 = 2500;
	const one_2 = 1600;
	const three_2 = 2600;
	const one_4 = 9000;
	const pizza = 1200;
	var num_one_1 =
	document.getElementById('1/1').value;
	var num_four_1 =
	document.getElementById('4/1').value;
	var num_one_2 =
	document.getElementById('1/2').value;
	var num_three_2 =
	document.getElementById('3/2').value;
	var num_one_4 =
	document.getElementById('1/4').value;
	var num_pizza =
	document.getElementById('pizza').value
	if (isNaN(num_one_1)) {
		num_one_1 = 0;
	}
	if (isNaN(num_four_1)) {
		num_four_1 = 0;
	}
	if (isNaN(num_one_2)) {
		num_one_2 = 0;
	}
	if (isNaN(num_three_2)) {
		num_three_2 = 0;
	}
	if (isNaN(num_one_4)) {
		num_one_4 = 0;
	}
	if (isNaN(pizza)) {
		num_pizza = 0;
	}
	var total = num_one_1 * one_1 + num_one_2 * one_2 +
	num_three_2 * three_2 + num_one_4 * one_4 + num_pizza *
	pizza + num_four_1 * four_1;
	document.getElementById('total').value = "Р" + total;


}