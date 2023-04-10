let item = (ele) => document.querySelectorAll(ele);
let getField = (ele) => document.getElementById(ele);

const $errorMessage = item('error');
const $firstName = getField('firstName');
const $lastName = getField('lastName');
const $email = getField('email');
const $password = getField('password');

const validateStrings = (field) => {
  const isEmptyValue = field.value === '';
  isEmptyValue ? true : false;
}

const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isMatchValue = email.match(regex);
  isMatchValue ? true : false;
}

const handleValidation = () => {
  const isMissingValidation = validateEmail($email);
  if (isMissingValidation) {
    re
  }
}

handleValidation();




