function checkName(value) {
    value = value.trim();
    const nameError = document.getElementById('name-error');
    let regex = /^[a-zA-Z ]{2,30}$/;
    let check = regex.test(value);
    if (check == true) {
        nameError.innerText = '';       
    }else{
        nameError.innerText = 'name-error';
        nameError.style.color = 'red';
        nameError.style.fontSize = '15px';
        nameError.style.fontStyle = 'italic';
    }
}


function checkMark(value) {
    value = value.trim();
    const markError = document.getElementById('mark-error');
    let regex = /^[0-9]$|^10$|^[0-9]{1}\.[0-9]$/;
    let check = regex.test(value);
    if (check == true) {
        markError.innerText = '';       
    }else{
        markError.innerText = 'mark-error';
        markError.style.color = 'red';
        markError.style.fontSize = '15px';
        markError.style.fontStyle = 'italic';
    }
}

function showResult() {
    const mark = document.getElementById("mark").value;
    if(mark >=5 ){
        document.getElementById("result").innerText = 'passed';
    } else {
        document.getElementById("result").innerText = 'failed';
    }
}


let arrayStudent = [];
function addStudent() {
    const nameError = document.getElementById('name-error');
    const markError = document.getElementById('mark-error');
    const student = {
        name: name,
        mark: mark
    }
    arrayStudent.push(student);
    let html = '';
    for (let index = 0; index < array.length; index++) {
        const student = arrayStudent[index];
        html += ``
    }
}

// khai báo object
// let student = {
//     name: 'Nguyen Van An ',
//     age: 20,
//     math: 8,
//     English: 7,
//     physics: 9,
//     average: funtion() {
//         const avg = (this.math + this.English + this.physics)/3
//         console.log(avg);
//     }
// }



/**
 * thêm phần tử vào cuối mảng
 * arr.push
 * thêm phần tử vào đầu mảng
 * arr.unshift(0);
 * xóa phần tử cuối mảng
 * arr.pop()
 * xóa phần tử đầu mảng 
 * arr.shift();
 * **** lọc phần tử trong mảng dùng filter
 * let arr2 = arr.filter(item => item % 2 == 0)
 *  *** biến đổi mảng, dùng map
 *  biến đổi mảng thành mảng là mũ 2
 *  let arr3 = arr.map(item => item * item)
 *  [1,4,9,16,25,36,49,64,81,100]
 * ** xóa phần tử trong mảng, dùng spilce
 * arr3.splice(3, 3, 100, 200, 300);
 */