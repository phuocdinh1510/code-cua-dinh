function img(index) {
    const imgMain = document.getElementById('imgMain');
    if (index == 1) {
        imgMain.src = "h1.png"
    }else if (index == 2) {
        imgMain.src = "h2.png"
    }else {
        imgMain.src = "h3.png"
    }
}
