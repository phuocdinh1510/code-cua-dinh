/**
 * HAM - FUNCTION
 */
// sum(1,2);
// function sum2(a,b){
//     const result = a + b;
//     return result;
// }
// const kq = result(5,6);



// function hellWorld() {
//     console.log('Hello World')
// }
// hellWorld();

// function sum(a,b){
//     const result = a + b;
//     console.log('ketQua: ',result);
// }
// BANG CUU CHUONG
// function bangCuuChuong(loai){
//     for(let i = 1;i<=9;i++){
//         const kq = i * loai;
//         console.log(`${i} x ${loai} = ${kq}`);
//     }
// }
// bangCuuChuong(3);

// function inBanCuuChuong(){
//     for(let i = 1; i<=9;i++ ){
//         bangCuuChuong(i);
//     }
// }
// inBanCuuChuong();
const game = ['Bua','Keo','Bao']

function playGame(type){
    const index = Math.floor(Math.random() * (game.length - 1));
    const game = game[index];// Máy chọn ra
    console.log('Nguoi Choi Chon: ',type);
    console.log('May Chon: ',game);
    if(type == game){
        console.log('Hòa');
    }else if(type == 'Bao' && type == 'Bua' ||
    type == 'Keo' && game == 'Bao' ||
    type == 'Bua' && game == 'Keo'){
        console.log('Nguoi Choi Thang!');
    }else{
        console.log('Nguoi Choi Thua!')
    }
}









const array = [
    'truc',
    'dinh',
    'vuong',
    'van a',
]
function quaySo(){
    const index = Math.floor(Math.random() * (array.length - 1));
    console.log('Người may mắn là: ',array[index]);
}