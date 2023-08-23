const btn = document.querySelectorAll("button");
// console.log(btn) ;
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productPrice = product.querySelector("span").innerText
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        //    console.log(productImg,productName,productPrice)
        addcart(productImg, productName, productPrice)
    })

});

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr");
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 100px;" src="' + productImg + '" alt="">' + productName + '</td><td><p><span class="prices">' + productPrice + '</span></p></td><td style="width: 30px; outline: none;"><input type="number" name="" id="" min="1" max="10" value="1"></td><td style="cursor: pointer   "><span  class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr)
    carttotal();
    deleteCart();
}


// ----------------------------Tính tiền---------------------
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".prices").innerHTML;
        var totalA = inputValue*productPrice*1000;
        totalC = totalC + totalA;
        // var totalD = totalC.toLocaleString('de-DE');
        // console.log(totalC)


    }
    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE') 
    inputchange();
}


// -----------------------------Xóa----------------------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
    }
}

// --------------------------------------------------------------
function inputchange( ){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })

       
     
    }
}