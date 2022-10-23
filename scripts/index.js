console.log('Script loaded');

const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const age = document.getElementById('age');
const birthDate = document.getElementById('birthDate');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {

    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const ageValue = age.value.trim();
    const birthDateValue = birthDate.value.trim();

    if(nameValue === '' || nameValue === null) {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if(surnameValue === '' || surnameValue === null) {
        setErrorFor(surname, 'Surname cannot be blank');
    }
    else {
        setSuccessFor(surname);
    }

    if(passwordValue === '' || passwordValue === null) {
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }

    if(password2Value === '' || password2Value === null) {
        setErrorFor(password2, 'Password cannot be blank');
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    }
    else {
        setSuccessFor(password2);
    }

    if(emailValue === '' || emailValue === null) {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }
    else {
        setSuccessFor(email);
    }

    if(ageValue === '' || ageValue === null) {
        setErrorFor(age, 'Age cannot be blank');
    }
    else if(isNaN(ageValue)) {
        setErrorFor(age, 'Age must be a number');
    }
    else {
        setSuccessFor(age);
    }

    if(birthDateValue === '' || birthDateValue === null) {
        setErrorFor(birthDate, 'Birth date cannot be blank');
    }
    else {
        setSuccessFor(birthDate);
    }


}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'validation error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'validation valid';
}


function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}