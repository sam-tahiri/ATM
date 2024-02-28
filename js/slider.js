const atm_slide = document.querySelectorAll('.atm_slide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<atm_slide.length;i++){
		atm_slide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' slider_active', '');
	}
	if(n > atm_slide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = atm_slide.length;
	   }
	atm_slide[counter - 1].style.display = "block";
	dot[counter - 1].className += " slider_active";
}