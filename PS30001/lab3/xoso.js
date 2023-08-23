const arr = [1,2,3,4,5,6,7,8,9,10]
function quayso() {
    const x = Math.floor(Math.random( ) * (arr.length - 1));
    let a = prompt("Nhập số của bạn: ");
    if(a == x){
        console.log("Bạn đã trúng!");
    }else{
        console.log("Bạn đã trật!");
    }
}