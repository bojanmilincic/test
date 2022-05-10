let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;
textTag.className = 'fadeMove';
/*let splittedText = text.split('');

//console.log(splittedText)
for(let i = 0; i < splittedText.length; i++) {
	textTag.innerHTML +='<span>${splittedText[i]}</span>';
}*/

let border = document.querySelector('.border-line')
let animationWidth = 0;

window.onscroll = () => {

	if(this.oldScroll > this.scrollY) {
		animationWidth -= 1.5;
	} else {
		animationWidth += 1.5;
	}

	if(animationWidth >= 100) {
		animationWidth = 100;
	} 

	if(animationWidth <=0){
		animationWidth =0;
	}

	border.style.width = animationWidth + '%';
	console.log(animationWidth);
	this.oldScroll = this.scrollY;



	let leftImage = document.querySelector('.slideFromLeft');
	let rightImage = document.querySelector('.slideFromRight');

	leftImage.classList.add('animated');
	rightImage.classList.add('animated');


}