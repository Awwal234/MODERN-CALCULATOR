let result = document.getElementById('board');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerText) {
			case 'C':
				result.innerText = '';
				break;
			case '⌫':
				result.innerText = result.innerText.slice(0, -1);
				break;
			case '=':
				result.innerText = eval(result.innerText);
				break;
			default:
				result.innerText += e.target.innerText;
		}
	});
});
