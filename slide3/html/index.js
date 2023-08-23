 /*let year = 2025;
if (year % 4 == 0 && year % 100 !== 0 || year % 100 == 0 && year % 400 == 0) {
    console.log('Năm Nhuận');
} else {
    console.log('Năm Không Nhuận');
}
*/
// quy tắc đặt tên biến
// 1.không được bắt đầu bằng số
// 2.không được chứa kí tự đặt biệt
// 3. không đc trùng vs cacs từ khóa
// 4. không được trùng với tên hàm, biến, ...
// Kiểu đặt tên
// 1. camelCase: numberA 
// 2. 



/**
 * Cấu trúc vòng lặp
 * 
 */
// let sum = 0;
/*
for (let i = 0; i <= 100; i++) {
    if(i % 3 == 0) {
       sum += i;
    }  
}
*/
/*
for (let index = 3; index <= 99; index += 3) {
    sum += index;
}
console.log('Tong cac so chia het cho 3: ', sum);
*/
let sum = 0;
let i = 3;
while(i <= 99){
    sum += i;
    i += 3;
}
console.log('Tong cac so chia het cho 3: ', sum);






/*
// let key = 1;
switch (key) {
    // case 1;
        console.log('Đây là số lẻ');
        break;
    default:
        console.log('ko có giá trị');
        break;
*/