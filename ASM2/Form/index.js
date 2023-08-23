function checkName(value) {
    value = value.trim();
    const nameError = document.getElementById('name-error');
    let regex = /^[a-zA-Z ]{2,30}$/;
    let check = regex.test(value);
    if (check == true) {
        nameError.innerText = '';       
    }else{
        nameError.innerText = '* Họ và Tên không hợp lệ';
        nameError.style.color = 'red';
        nameError.style.fontSize = '15px';
        nameError.style.fontStyle = 'italic';
    }
}

function checkAge(value) {
    value = value.trim();
    const ageError = document.getElementById('age-error');
    let regex = /^1[8-9]$^[2-9][0-9]$^100$/;//cuc ky quan trong
    let check = regex.test(value);
    if (check == true) {
        ageError.innerText = '';       
    }else{
        ageError.innerText = '*Tuổi không hợp lệ';
        ageError.style.color = 'red';
        ageError.style.fontSize = '15px';
        ageError.style.fontStyle = 'italic';
    }
}

function checkAddress(value) {
    value = value.trim();
    const addressError = document.getElementById('address-error');
    let regex = /^.{2,200}$/;//cuc ky quan trong
    let check = regex.test(value);
    if (check == true) {
        addressError.innerText = '';       
    }else{
        addressError.innerText = '*Địa chỉ không hợp lệ';
        addressError.style.color = 'red';
        addressError.style.fontSize = '15px';
        addressError.style.fontStyle = 'italic';
    }
}
function checkPhone(value) {
    value = value.trim();
    const phoneError = document.getElementById('phone-error');
    let regex = /^0[0-9]{9}$/;//cuc ky quan trong
    let check = regex.test(value);
    if (check == true) {
        phoneError.innerText = '';       
    }else{
        phoneError.innerText = '*Điện thoại không hợp lệ';
        phoneError.style.color = 'red';
        phoneError.style.fontSize = '15px';
        phoneError.style.fontStyle = 'italic';
    }
}
function checkEmail(value) {
    value = value.trim();
    const emailError = document.getElementById('email-error');
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;//cuc ky quan trong
    let check = regex.test(value);
    if (check == true) {
        emailError.innerText = '';       
    }else{
        emailError.innerText = '*Email không hợp lệ';
        emailError.style.color = 'red';
        emailError.style.fontSize = '15px';
        emailError.style.fontStyle = 'italic';
    }
}