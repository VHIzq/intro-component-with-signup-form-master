let getField = (ele) => document.getElementById(ele);

const $firstName = getField('firstName').value;
const $lastName = getField('lastName').value;
const $email = getField('email').value;
const $password = getField('password').value;

const $errorName = getField('error-name');
const $errorLast = getField('error-last');
const $errorEmail = getField('error-email');
const $errorPassword = getField('error-password');

const $submitBtn = getField('submit');

$submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  validateName();
  validateLastName();
  validatePassword();
  validateEmail();
});

const validateName = () => {
  if ($firstName.trim() === '') {
    $errorName.style.display = 'block';
  }
};

const validateLastName = () => {
  if ($lastName.trim() === '') {
    $errorLast.style.display = 'block';
  }
};

const validatePassword = () => {
  if ($password.trim() === '') {
    $errorPassword.style.display = 'block';
  }
};

const validateEmail = () => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isMatchEmail = $email.match(regex);
  if (!isMatchEmail) {
    $errorEmail.style.display = 'block';
  }
};
