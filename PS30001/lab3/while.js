let i = 2;

function bangCuuChuong(loai) {
    let j = 1;
    while (j<=10) {
        const kq = j * loai;
        console.log(`${loai} x ${j} = ${kq}`);
        j++;
    }
   
}
function inBCCWhile() {
    while (i<=10) {
        bangCuuChuong(i);
        console.log(' ');
        i++;
    }
}