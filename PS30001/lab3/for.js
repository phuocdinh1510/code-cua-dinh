function bangCuuChuong(loai) {
    for (let i = 1; i <= 10; i++) {
        const kq = i * loai;
        console.log(`${i} x ${loai} = ${kq}`);
    }
}
function inBCC() {
    for (let i = 2; i <= 10; i++) {
        bangCuuChuong(i);
        console.log(' ');
    }
}