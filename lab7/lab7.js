function checkNameAndPrice() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    const nameRegex = /^[a-zA-Z]{3,30}$/;
    const priceRegex = /^\d+$/;

    if(!nameRegex.test(name)) {
        document.getElementById('form-error').innerText = 'Ten san pham khong hop le'
        return;
    }if(!priceRegex.test(price)){
        document.getElementById('form-error').innerText = 'Gia san pham khong hop le'
    }
    //xoa loi
    document.getElementById('form-error').innerText = ''

}