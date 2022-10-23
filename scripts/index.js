console.log('Script loaded');
//fuck ammends
const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const age = document.getElementById('age');
const birthDate = document.getElementById('birthDate');
const tel1 = document.getElementById('tel1');
const tel2 = document.getElementById('tel2');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const city = document.getElementById('city');
const address = document.getElementById('address');
const zip = document.getElementById('zip');
const checkboxTerms = document.getElementById('checkboxTerms');

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
    const phone1Value = tel1.value.trim();
    const phone2Value = tel2.value.trim();
    const genderValue = gender.value;
    const countryValue = country.value;
    const cityValue = city.value.trim();
    const addressValue = address.value.trim();
    const zipValue = zip.value.trim();
    const checkboxTermsValue = checkboxTerms.checked;


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

    if((phone1Value === '' || phone1Value === null) && (phone2Value === '' || phone2Value === null)) {
        setErrorFor(tel1, 'Phone number cannot be blank');
    }
    else if(!/^\+\d{3}$/.test(phone1Value)) {
        setErrorFor(tel1, 'Invalid international number');
    }
    else if(isNaN(phone2Value)) {
        setErrorFor(tel2, 'Phone number must be a number');
    }
    else if(phone2Value.length > 9 || phone2Value.length < 9) {
        setErrorFor(tel2, 'Length of phone number must be 9');
    }
    else {
        setSuccessFor(tel1);
    }

    if (genderValue === '0' || genderValue === null) {
        setErrorFor(gender, 'Gender must be selected');

    }
    else {
        setSuccessFor(gender);
    }

    if (countryValue === '0' || countryValue === null) {
        setErrorFor(country, 'Country must be selected');
    }
    else {
        setSuccessFor(country);
    }

    if(cityValue === '' || cityValue === null) {
        setErrorFor(city, 'City cannot be blank');
    }
    else if (!isNaN(cityValue)) {
        setErrorFor(city, 'City cannot be a number');
    }
    else {
        setSuccessFor(city);
    }

    if(addressValue === '' || addressValue === null) {
        setErrorFor(address, 'Address cannot be blank');
    }
    else {
        setSuccessFor(address);
    }

    if(zipValue === '' || zipValue === null) {
        setErrorFor(zip, 'Zip code cannot be blank');
    }
    else if(isNaN(zipValue)) {
        setErrorFor(zip, 'Zip code must be a number');
    }
    else {
        setSuccessFor(zip);
    }

    if(!checkboxTermsValue) {
        setErrorFor(checkboxTerms, 'Required');
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