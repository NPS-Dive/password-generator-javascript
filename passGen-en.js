let passLen = document.getElementById("pass-len-selector").value;
const generatePass = document.getElementById("btn");
const copyBTN = document.getElementById("copy");
let passLenINT = parseInt(passLen);
const resetButton = document.getElementById("reset");

const newPassword = (length) => {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-+/_()*&^%$#@!!~';
	let passwordLength = characters.length;
	
	for (let pass = 0; pass < length; pass++) {
		result += characters.charAt(Math.floor(Math.random() * passwordLength));
	}
	return result;
}

function displayPassword(){
	document.getElementById("result-pass").innerHTML = newPassword(passLenINT);
}

function copyToClipboard(){
	let copyContent = document.getElementById("result-pass");
	navigator.clipboard.writeText(copyContent.innerText).then(message => {
		alert("Copied the Generated PassWord: " + copyContent.innerText);
	});
}

generatePass.addEventListener('click', function(){
	displayPassword();
});

copyBTN.addEventListener('click', function(){
	copyToClipboard();
});

resetButton.addEventListener('click', function (){
	document.getElementById("pass-len-selector").value = null;
	document.getElementById("result-pass").innerHTML = null;
});