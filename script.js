const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using contraint API
  isValid = form.checkValidity();
  // console.log(isValid);
  // style main message for an erroe
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  // check to see if passwords match
  if (passwordEl1.value === passwordEl2.value) {
    passwordsMatch = true;
    passwordEl1.style.borderColor = 'green';
    passwordEl2.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure Passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    passwordEl1.style.borderColor = 'red';
    passwordEl2.style.borderColor = 'red';
    return;
  }

  // successful
  if (isValid && passwordsMatch) {
    message.textContent = 'Success!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }

}


function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };
  // do something with user data
  console.log(user);
}



function processFormData(e) {
  e.preventDefault();

  // validate form
  validateForm();
  // submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}


// event listener
form.addEventListener('submit', processFormData);