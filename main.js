const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const createAcctBtn = document.querySelector('#create_acct_btn');
const passwordDiv = document.querySelector('.password-div');

var errorLabel = document.createElement('label');
errorLabel.setAttribute('for', 'password');
errorLabel.setAttribute('class', 'error-label');
errorLabel.textContent = 'Passwords do not match';

createAcctBtn.addEventListener('click', (event) => {
    if (password.value != confirmPassword.value) {
        password.classList.add('no-match');
        confirmPassword.classList.add('no-match');
        passwordDiv.appendChild(errorLabel);
    }

    if (password.value == confirmPassword.value) {
        if (password.classList.contains('no-match') & confirmPassword.classList.contains('no-match')) {
            password.classList.remove('no-match');
            confirmPassword.classList.remove('no-match');
            passwordDiv.removeChild(errorLabel);
        }
    }
});