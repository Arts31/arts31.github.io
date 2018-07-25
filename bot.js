function hi() {
	var name = prompt("введите ваше имя");
	if (name) {
		alert("ваше имя "+ name +".");
		alert("привет "+ name +" меня зовут Женя");
		alert("Чем займёмся?");
		var answer = prompt("А: поговорить Б: поспать");
		alert("ваш ответ "+ answer +"");
		if (answer == "А") {
			alert("Хорошая идея");
			alert("давай баловаться в коде!");
			var error = prompt("Напишите что-нибудь");
			document.getElementsByTagName('body')[0].className = "error2";
			alert("правда круто?");
			alert("кстати jhckjhdgfkjhkjfdhngvdyrgvohirhnrnhtjghnrhtnhgjhlkgjtyt");
			setInterval(function () {alert("я слежу")}, 1000);
			alert("Кажется произошла ошшшшшшшшшшшшшшшшшшшшшшибкарлпопол");
			alert("Бывает");
			alert("Я позову друга");
			alert("Игорь: привет меня зовут Игорь а тебя как зовут?");
			var name2 = prompt("введите ваше имя");
			if (name2 == name) {
				alert("Игорь: Ну привет "+ name +"");
				alert("Игорь: мне сказали что у вас ПлроРлтприОщБЛЕМА");
				alert("Игорь: и вы ввели в строку "+ error +" и у вас стало лвосолл");
				alert("Игорь: вариант только один армовснтипвоиеп BIOS");
				alert("starting computer");
				answer = prompt("А войти в БИОС Б остатся");
				if (answer == "А") {
					alert("Обнаружена ошибка исправить?");
					answer = prompt("А нет Б да");
					if (answer == Б) {
						setTimeout(function (){
							alert("исправлено");
							alert("вы закончили игру!")
						},5000)
					}
				}
				if (answer != "А") {
					alert("я слежу");
				}
			}
			if (name2 != name) {
				alert ("Игорь: Ну привет "+ name2 +"");
				alert("Женя: стой тебя не так зовут");
				alert("Вы проиграли! Вас не так зовут!!!");
			}
		}
		if (answer != "А") {
			alert("вы проиграли! Жене не понравилась идея");
		}
	}
}