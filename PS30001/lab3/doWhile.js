var i = 2;
function bangCuuChuong(loai) {
    let j = 1;
    do{
        const kq = j * loai;
        console.log(`${loai} x ${j} = ${kq}`);
        j++;
    }while(j<=10);
}
function inBCCdoWhile() {
    do{
        bangCuuChuong(i);
        console.log(' ');
        i++;
    }while (i<=10);
}