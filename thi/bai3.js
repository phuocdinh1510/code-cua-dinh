const arr = [
    { id: 1, name: 'Iphone 12', price: 1000, quantity: 0, checked: false },
    { id: 2, name: 'Iphone 13', price: 1200, quantity: 0, checked: false },
    { id: 3, name: 'Iphone 14', price: 1500, quantity: 0, checked: false },
    ];

function displayProduct() {
    const div = document.getElementById('tbody');
    let html = '';
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        let sum = product.price * product.quantity;
        if (product.checked) {
            total += sum;
        }
        html += `
        <tr>
            ${product.checked ?
                `<td><input type="checkbox" checked name="" id="" onchange="onChangeChecked(${i})"></td>` :
                `<td><input type="checkbox"  name="" id="" onchange="onChangeChecked(${i})"></td>`
            }
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><input type="number" value="${product.quantity}" name="" id="" onchange="onChangeQuantity(${i}, this.value)"></td>
            <td> ${sum} </td>
        </tr>
        `;

    }
    html += `
    <tr>
    <td colspan="4">Tổng Tiền</td>
    <td>${total}</td>
    </tr>
`;
    div.innerHTML = html;
}

function onChangeQuantity(index, quantity) {
    arr[index].quantity = quantity;
    displayProduct();
}

function onChangeChecked(index) {
    arr[index].checked = !arr[index].checked;
    displayProduct();
}

displayProduct();