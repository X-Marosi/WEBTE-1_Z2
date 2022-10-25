console.log('Script loaded');
const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
let age = document.getElementById('age');
const birthDate = document.getElementById('birthDate');
const tel1 = document.getElementById('tel1');
const tel2 = document.getElementById('tel2');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const city = document.getElementById('city');
const address = document.getElementById('address');
const zip = document.getElementById('zip');
const checkboxTerms = document.getElementById('checkboxTerms');
const selectOption1 = document.getElementById('option1');
const selectOption2 = document.getElementById('option2');
const selectOption3 = document.getElementById('option3');
const creditCard = document.getElementById('creditCard');
const cardNumber = document.getElementById('cardNumber');
const cardHolder = document.getElementById('cardHolder');
const expDateLabel = document.getElementById('expDateLabel');
const expDateMonth = document.getElementById('expDateMonth');
const expDateYear = document.getElementById('expDateYear');
const cvv = document.getElementById('cvv');
const saveInfo = document.getElementById('saveInfo');
const transfer = document.getElementById('transfer');
const paymentBank = document.getElementById('paymentBank');
const paypal = document.getElementById('paypal');
const paymentPayPal = document.getElementById('paymentPayPal');
const checkboxCode = document.getElementById('checkboxCode');
const discountCode = document.getElementById('discountCode');

function checkName(){
    const nameValue = name.value.trim();

    if(nameValue === '' || nameValue === null) {
        setErrorFor(name, 'Name cannot be blank');
    }
    else if (!isNaN(nameValue)) {
        setErrorFor(name, 'Name cannot be a number');
    }
    else if (nameValue.length > 20) {
        setErrorFor(name, 'Name cannot be longer than 20 characters');
    }
    else if(nameValue.length < 2) {
        setErrorFor(name, 'Name cannot be only 1 character');
    }
    else {
        setSuccessFor(name);
    }
}
function checkSurname(){
    const surnameValue = surname.value.trim();

    if(surnameValue === '' || surnameValue === null) {
        setErrorFor(surname, 'Surname cannot be blank');
    }
    else if (!isNaN(surnameValue)) {
        setErrorFor(surname, 'Surname cannot be a number');
    }
    else if (surnameValue.length > 20) {
        setErrorFor(surname, 'Surname cannot be longer than 20 characters');
    }
    else if (surnameValue.length < 2) {
        setErrorFor(surname, 'Surname cannot be only 1 character');
    }
    else {
        setSuccessFor(surname);
    }
}

function checkPassword(){
    const passwordValue = password.value.trim();

    if(passwordValue === '' || passwordValue === null) {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue.length < 6) {
        setErrorFor(password, 'Password must be at least 6 characters');
    }
    else if (passwordValue.length > 20) {
        setErrorFor(password, 'Password cannot be longer than 20 characters');
    }
    else {
        setSuccessFor(password);
    }
}

function checkPassword2(){
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();

    if(password2Value === '' || password2Value === null) {
        setErrorFor(password2, 'Password cannot be blank');
    }
    else if(password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords do not match');
    }
    else {
        setSuccessFor(password2);
    }
}

function checkEmail(){
    const emailValue = email.value.trim();

    if(emailValue === '' || emailValue === null) {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }
    else {
        setSuccessFor(email);
    }
}

function checkBirthDate(){
    const birthDateValue = birthDate.value.trim();

    if(birthDateValue === '' || birthDateValue === null) {
        setErrorFor(birthDate, 'Birth date cannot be blank');
    }
    else {
        setSuccessFor(birthDate);
    }
}

function checkTel(){
    const phone1Value = tel1.value.trim();
    const phone2Value = tel2.value.trim();

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

}

function checkAge(){
    const ageValue = age.value.trim();
    const birthDateValue = birthDate.value.trim();

    if(ageValue === '' || ageValue === null) {
        setErrorFor(age, 'Age cannot be blank');
    }

    else if(ageFromDate(birthDateValue) !== parseInt(ageValue)) {
        setErrorFor(age, 'Age does not match birth date');
        console.log(ageFromDate(birthDateValue));
        console.log(ageValue);

    }
    else if (ageValue < 12) {
        setErrorFor(age, 'Age must be at least 12');
    }
    else if (ageValue > 120) {
        setErrorFor(age, 'ㅤGo lay back in your sarcophagus');
    }
    else {
        setSuccessFor(age);
    }
}

function checkGender(){
    const addressValue = address.value.trim();

    if(addressValue === '' || addressValue === null) {
        setErrorFor(address, 'Address cannot be blank');
    }
    else if (addressValue.length > 50) {
        setErrorFor(address, 'Address cannot be longer than 50 characters');
    }
    else {
        setSuccessFor(address);
    }
}

function checkZip(){
    const zipValue = zip.value.trim();

    if(zipValue === '' || zipValue === null) {
        setErrorFor(zip, 'Zip code cannot be blank');
    }
    else if (zipValue.length !== 5) {
        setErrorFor(zip, 'Zip code must be exactly 5 characters');
    }
    else {
        setSuccessFor(zip);
    }
}

function checkCity(){
    const cityValue = city.value.trim();

    if(cityValue === '' || cityValue === null) {
        setErrorFor(city, 'City cannot be blank');
    }
    else if (!isNaN(cityValue)) {
        setErrorFor(city, 'City cannot be a number');
    }
    else if (cityValue.length > 20) {
        setErrorFor(city, 'City cannot be longer than 20 characters');
    }
    else if (cityValue.length < 2) {
        setErrorFor(city, 'City cannot be only 1 character');
    }
    else {
        setSuccessFor(city);
    }
}

function checkAddress(){
    const addressValue = address.value.trim();

    if(addressValue === '' || addressValue === null) {
        setErrorFor(address, 'Address cannot be blank');
    }
    else if (addressValue.length > 50) {
        setErrorFor(address, 'Address cannot be longer than 50 characters');
    }
    else {
        setSuccessFor(address);
    }
}

function checkCountry() {
    const countryValue = country.value;
    if (countryValue === '0' || countryValue === null) {
        setErrorFor(country, 'Country must be selected');
    } else {
        setSuccessFor(country);
    }
}

function checkInputs() {
    checkName();
    checkSurname();
    checkPassword();
    checkPassword2();
    checkEmail();
    checkBirthDate();
    checkTel();
    checkAge();
    checkGender();
    checkCountry();
    checkCity();
    checkAddress();
    checkZip();
    checkTerms();
}

function checkTerms() {
    const checkboxTermsValue = checkboxTerms.checked;
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
    return /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]{3,}@([a-zA-Z0-9-]+.)+[a-zA-Z0-9-]{2,4}$/.test(email);
}
function changeDropdownList1(selectOption1,selectOption2) {
    const option1 = selectOption1.value;

    if(option1 === '1'){
        selectOption2.innerHTML = [
            '<option value="0">SELECT SWITCH:</option>',
            '<option value="0">Holy Panda</option>',
            '<option value="1">Gateron Black</option>',
            '<option value="2">Cherry MX Brown</option>',
            '<option value="3">Cherry MX Red</option>',
            '<option value="4">Cherry MX Blue</option>',
            '<option value="5">Cherry MX Silver</option>'
        ];
        selectOption2.classList.add('active');
    }
    else if(option1 === '2'){
        selectOption2.innerHTML = [
            '<option value="0">SELECT MATERIAL:</option>',
            '<option value="1">Aluminium</option>',
            '<option value="2">Acrylic </option>',
            '<option value="3">Plastic BLACK</option>',
            '<option value="4">Plastic WHITE </option>',
            '<option value="5">Plastic BLACK w/ RGB strip</option>',
            '<option value="6">Plastic WHITE w/ RGB strip</option>'
        ];
        selectOption2.classList.add('active');
    }
    else if(option1 === '3'){
        selectOption2.innerHTML = [
            '<option value="0">MATERIAL:</option>',
            '<option value="1">ABS</option>',
            '<option value="2">PBT </option>',
            '<option value="3">POM</option>'
        ];
        selectOption2.classList.add('active');
    }
    else {
        selectOption2.classList.remove('active');
        selectOption3.classList.remove('active');
    }
}

function changeDropdownList2(selectOption1,selectOption2, selectParent) {
    const selectParentValue = selectParent.value;
    const selectOption1Value = selectOption1.value;

    if(selectParentValue === '1') {
        selectOption2.innerHTML = [
            '<option value="0">AMOUNT:</option>',
            '<option value="1">x30</option>',
            '<option value="2">x60</option>',
            '<option value="3">x120</option>'
        ];
        selectOption2.classList.add('active');
    }
    else if(selectParentValue === '2'){
        selectOption2.innerHTML = [
            '<option value="0">TYPE:</option>',
            '<option value="1">FULL BOARD</option>',
            '<option value="0">TKL</option>',
            '<option value="0">60%</option>'
        ];
        selectOption2.classList.add('active');
    }
    else if(selectParentValue === '3'){

        if ( selectOption1Value === '1') {
            selectOption2.innerHTML = [
                '<option value="0">SELECT ABS KEYCAPS:</option>',
                '<option value="1">Keychron Doubleshot ABS Light Grey</option>',
                '<option value="0">Keychron Doubleshot ABS Retro</option>',
                '<option value="0">Keychron Doubleshot ABS Blue and White</option>'
            ];
            selectOption2.classList.add('active');
        }
        else if ( selectOption1Value === '2') {
            selectOption2.innerHTML = [
                '<option value="0">SELECT PBT KEYCAPS:</option>',
                '<option value="1">HyperX Pudding PBT Doubleshot WHITE</option>',
                '<option value="0">HyperX Pudding PBT Doubleshot BLACK</option>',
                '<option value="0">YMDK Carbon 108 Cherry Keycaps</option>',
                '<option value="0">Blank White Thick PBT Keycaps</option>'
            ];
            selectOption2.classList.add('active');
        }
        else if ( selectOption1Value === '3') {
            selectOption2.innerHTML = [
                '<option value="0">SELECT POM KEYCAPS:</option>',
                '<option value="1">POM Jelly Sugarcube</option>',
                '<option value="0">POM Jelly Strawberry</option>',
                '<option value="0">POM Ink Alpha kit</option>',
                '<option value="0">POM Ink Alpha kit (side etch)</option>',
                '<option value="0">POM Ink Mod kit</option>',
                '<option value="0">POM Ash Alpha kit</option>',
                '<option value="0">POM Ash Alpha kit (side etch_</option>',
                '<option value="0">POM Ash Mod kit</option>'
            ];
            selectOption2.classList.add('active');
        }
        else {
            selectOption2.classList.remove('active');
        }
    }
}

function ageFromDate(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function countChar1(string) {
    const charCount = string.length;
    const charLimit = document.getElementById('charLimit1');
    charLimit.innerText = charCount+' of 20';
    console.log(charCount);
}

function countChar2(string) {
    const charCount = string.length;
    const charLimit = document.getElementById('charLimit2');
    charLimit.innerText = charCount+' of 20';
    console.log(charCount);
}

function removeCard() {
    cardNumber.classList.remove('active');
    cardNumber.parentElement.classList.remove('active');
    cardHolder.classList.remove('active');
    cardHolder.parentElement.classList.remove('active');
    expDateLabel.classList.remove('active');
    expDateLabel.parentElement.classList.remove('active');
    expDateMonth.classList.remove('active');
    expDateYear.classList.remove('active');
    cvv.classList.remove('active');
    cvv.parentElement.classList.remove('active');
    saveInfo.classList.remove('active');
}

name.addEventListener('keyup', () => {
    countChar1(name.value.trim());
});
surname.addEventListener('keyup', () => {
    countChar2(surname.value.trim());
});
name.addEventListener('keyup', () => {checkName();});
surname.addEventListener('keyup', () => {checkSurname();});
password.addEventListener('keyup', () => {checkPassword();});
password2.addEventListener('keyup', () => {checkPassword2();});
email.addEventListener('keyup', () => {checkEmail();});
birthDate.addEventListener('keyup', () => {checkBirthDate()});
tel1.addEventListener('keyup', () => {checkTel();});
tel2.addEventListener('keyup', () => {checkTel();});
age.addEventListener('keyup', () => {checkAge();});
gender.addEventListener('keyup', () => {checkGender();});
address.addEventListener('keyup', () => {checkAddress();});
country.addEventListener('change', () => {checkCountry();});
city.addEventListener('keyup', () => {checkCity();});
zip.addEventListener('keyup', () => {checkZip();});
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})
selectOption1.addEventListener('change', function() {
    changeDropdownList1(selectOption1,selectOption2);
    changeDropdownList2(selectOption2,selectOption3,selectOption1);
});
selectOption2.addEventListener('change', function() {
    changeDropdownList2(selectOption2,selectOption3,selectOption1);
});
creditCard.addEventListener('click', function() {
    paymentPayPal.classList.remove('active');
    paymentBank.classList.remove('active');

    cardNumber.classList.add('active');
    cardNumber.parentElement.classList.add('active');
    cardHolder.classList.add('active');
    cardHolder.parentElement.classList.add('active');
    expDateLabel.classList.add('active');
    expDateLabel.parentElement.classList.add('active');
    expDateMonth.classList.add('active');
    expDateYear.classList.add('active');
    cvv.classList.add('active');
    cvv.parentElement.classList.add('active');
    saveInfo.classList.add('active');
});
paypal.addEventListener('click', function() {
    paymentPayPal.classList.add('active');
    paymentBank.classList.remove('active');

    removeCard();

});
transfer.addEventListener('click', function() {
    paymentBank.classList.add('active');
    paymentPayPal.classList.remove('active');
    removeCard();

});
checkboxTerms.addEventListener('change', function() {checkTerms();});
checkboxCode.addEventListener('click', function() {
    discountCode.classList.toggle('active');
});