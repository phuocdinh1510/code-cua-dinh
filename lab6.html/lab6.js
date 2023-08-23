let count = 1;
function onClick(element) {
    if(count % 2 == 0){
        element.innerText = "O"
        element.style.backgroundColor = "red";
    }else{
        element.innerText = "X";
        element.style.backgroundColor = "blue";
    }
    count++;
}

// function onClick(element) {
//     element.innerText = "X";

// }