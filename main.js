let item = (ele) => document.getElementsByClassName(ele);
let getField = (ele) => document.getElementById(ele);

const $errorName = item('error-name');
const $errorLastName = item('error-last');
const $errorEmail = item('error-email');
const $errorPassword = item('error-password');

const $firstName = getField('firstName');
const $lastName = getField('lastName');
const $email = getField('email');
const $password = getField('password');
const $submitBtn = getField('submit');
const $form = getField('form');

const validateStrings = (field) => {
  const isEmptyValue = field.value.trim() === '';
  return !isEmptyValue;
};

const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isMatchValue = email.value.match(regex);
  return isMatchValue !== null;
};

$form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const handleValidation = () => {
  const isMissingEmail = !validateEmail($email);
  const isMissingFirstName = !validateStrings($firstName);
  const isMissingLastName = !validateStrings($lastName);
  const isMissingPassword = !validateStrings($password);

  if (isMissingEmail) {
    $errorEmail.style.display = 'block';
  }
  if (isMissingFirstName) {
    $errorName.style.display = 'block';
  }
  if (isMissingLastName) {
    $errorLastName.style.display = 'block';
  }
  if (isMissingPassword) {
    $errorPassword.style.display = 'block';
  }
};

$submitBtn.addEventListener('submit', handleValidation());
