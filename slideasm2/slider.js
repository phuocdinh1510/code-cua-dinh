const arr = [
   '/slideasm2/img/dosiin-dosiin-COVER__DOSIIN119766333319.webp',
   '/slideasm2/img/slide2.webp',
   '/slideasm2/img/slide33.webp'

];
function displayImg() {
    const div = document.getElementById('slide');
    let html = '';
    for (let index = 0; index < array.length; index++) {
        html += `img src = "${arr[index]}" alt="slide"`;

    }
    div.innerHTML = html;
}
displayImg();

// chỉ số của anh đang hiển thị [0,1,2,3,4]
let currentIndex = 0;
function changImage(direction) {
    if (direction == 'left') {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }else{
        if(currentIndex < arr.length - 1){
            currentIndex ++;
        }
    }
    const img = document.getElementById('slide');
    img.style.marginLeft = `-${currentIndex * 500}px`
}