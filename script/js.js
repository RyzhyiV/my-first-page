function showText(el){
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "ShowLess...";
	} else {
		el.previousElementSibling.style.height = "80px";
		el.innerHTML = "Read More..";
	}  // попередній код зламається, якщо змінити висоту параграфа з 80px
	// if(el.previousElementSibling.style.height === "100%" ) {
	// 	el.previousElementSibling.style.height = "80px";/* так текст не повернеться на попередню висоту, якщо вона !=80px */
	// 	el.innerHTML = "Read More..";
	// } else {
	// 	el.previousElementSibling.style.height = "100%";
	// 	el.innerHTML = "ShowLess...";
	// }
 	// if(el.previousElementSibling.animate){
	// 	el.previousElementSibling.animate([{color:'white'},{color:'black'}],5000);
	//  }else alert('Ваш браузер не підтримує animate');
}