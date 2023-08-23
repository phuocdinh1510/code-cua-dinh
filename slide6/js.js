// bai DOM

/**
 * document.getElementById: timf 1 phan tu co id la
 *  
 */
function getByClasName() {
    // lay cac phan tu co class la my-div
    // ket qua se la 1 mang
    const divs = document.getElementsByClassName('my-div');

    divs[0].classList.add('class1');//them class
    divs[1].classList.remove('class1');// xoa class
    divs[1].style.color = 'blue';
    divs[2].style.fontSize = '60px';
    divs[3].style.fontWeight = 'bold';

    // divs[0].innerText = 'thay doi noi dung phan tu dau tien';
    // divs[1].innerHTML = '<h1>thay doi noi dung phan tu thu 2</h1>';
}