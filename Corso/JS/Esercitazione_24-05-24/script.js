const h1El = document.createElement('h1');
const pEl = document.createElement('p');
document.body.insertAdjacentElement('afterbegin', h1El);
document.body.append(pEl);

const buttonEl = document.createElement('button');
pEl.insertAdjacentElement('afterend', buttonEl);
buttonEl.innerHTML = 0;


buttonEl.style.backgroundColor = 'green';
buttonEl.style.borderRadius = '50%';
buttonEl.style.border = 'none';
buttonEl.style.fontSize = '30px';
buttonEl.style.padding = '0 8px';


buttonEl.onmouseenter = function(){
	buttonEl.style.backgroundColor = "red";
	buttonEl.style.color = 'black';
}

buttonEl.onmouseout = function(){
	buttonEl.style.backgroundColor = "blue";
	buttonEl.style.color = 'white';
	if (Number(buttonEl.innerHTML) === 0) {
		buttonEl.innerHTML = 0;
		buttonEl.style.padding = '0 8px';
		return;
	}
	buttonEl.innerHTML--;
	if (Number(buttonEl.innerHTML) === 1) {
		buttonEl.style.padding = '0 8px';
		return;
	}
	const buttonPadding = parseInt(buttonEl.style.padding);
	const newButtonPadding = buttonPadding - 5;
	buttonEl.style.padding = newButtonPadding + 'px';
}

buttonEl.onclick = function(){
	buttonEl.innerHTML++;
	if (buttonEl.innerHTML === '1') {
		buttonEl.style.padding = '0 8px';
		return;
	}
	if (Number(buttonEl.innerHTML) >= 2 && Number(buttonEl.innerHTML) <= 9) {
			const buttonPaddingLeft = parseInt(buttonEl.style.paddingLeft);
			const newButtonPaddingLeft = buttonPaddingLeft + 5;
			buttonEl.style.paddingLeft = newButtonPaddingLeft + 'px';
			const buttonPaddingRight = parseInt(buttonEl.style.paddingRight);
			const newButtonPaddingRight = buttonPaddingRight + 5;
			buttonEl.style.paddingRight = newButtonPaddingRight + 'px';
			const buttonPaddingTop = parseInt(buttonEl.style.paddingTop);
			const newButtonPaddingTop = buttonPaddingTop + 5;
			buttonEl.style.paddingTop = newButtonPaddingTop + 'px';
			const buttonPaddingBottom = parseInt(buttonEl.style.paddingBottom);
			const newButtonPaddingBottom = buttonPaddingBottom + 5;
			buttonEl.style.paddingBottom = newButtonPaddingBottom + 'px';
	}
	else {
		const buttonPadding = parseInt(buttonEl.style.padding);
		const newButtonPadding = buttonPadding + 5;
		buttonEl.style.padding = newButtonPadding + 'px';
	}
	if (buttonEl.innerHTML === '50') {
		buttonEl.innerHTML = 0;
		buttonEl.style.padding = '0 8px';
	}
}


const formEl = document.body.querySelector('form');
const inputEl = document.body.querySelector('input');
const ulEl = document.body.querySelector('ul');

formEl.onsubmit = function(event) {
	event.preventDefault();
	const inputValue = inputEl.value;
	if (inputValue && inputValue.includes(' ')) {
		const elementEl = document.createElement('li');
		elementEl.innerHTML = inputValue;
		ulEl.insertAdjacentElement('beforeend', elementEl);
		elementEl.onclick = function() {
			console.log(elementEl.textContent);
		}
	}
}