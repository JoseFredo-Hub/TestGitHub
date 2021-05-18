
const codeInput  = document.getElementById('code');
const codeOutput = document.getElementById('code-validation');
const submitButton = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');

emailInput.setAttribute("required","true");
emailInput.setAttribute("type","email");

codeInput.addEventListener('input',updateValue);

function updateValue(e) {
    let str = e.target.value;
    if ( /^CODE-/.test(str) ) {
        codeOutput.innerHTML = 'Code valide'; 
		submitButton.removeAttribute("disabled");		
    } else {
        codeOutput.innerHTML = 'Code invalide';
		submitButton.setAttribute("disabled","true");
    }
}
