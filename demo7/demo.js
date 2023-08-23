const sanPham = [
    { id: 1, name: 'Iphone 12', price: 500 },
    { id: 2, name: 'Iphone 12 Pro', price: 600 },
    { id: 3, name: 'Iphone 12 Pro Max', price: 700 },
    { id: 4, name: 'Iphone 12 Mini', price: 400 },
    { id: 5, name: 'Iphone 11', price: 300 },
];

const gioHang = [];

function hienThiSanPham(array) {
    const div = document.getElementById('san-pham');
    let innerHTML = `<table border="1">`;
    for (let index = 0; index < array.length; index++) {
        const sp = array[index];
        innerHTML += `
            <tr>
                <td>${sp.name}</td>
                <td>${sp.price}</td>
                <td>
                    <button onclick="themVaoGioHang(${sp.id})">Thêm</button>
                </td>
            </tr>
        `;
    }
    innerHTML += `</table>`;
    div.innerHTML = innerHTML;
}

hienThiSanPham(sanPham);

function themVaoGioHang(id) {
    // tìm sản phẩm theo id
    const product = sanPham.find(sp => sp.id == id);
    // thêm 1 sản phẩm vào giỏ hàng
    gioHang.push(product);
    // hiển thị giỏ hàng
    const div = document.getElementById('gio-hang');
    let innerHTML = `<table border="1">`;
    for (let index = 0; index < gioHang.length; index++) {
        const sp = gioHang[index];
        innerHTML += `
            <tr>
                <td>${sp.name}</td>
                <td>${sp.price}</td>
                <td>
                    <button onclick="xoaSanPham(${sp.id})">Xóa</button>
                </td>
            </tr>
        `;
    }
    innerHTML += `</table>`;
    div.innerHTML = innerHTML;
    // tính tiền giỏ hàng
    tinhTien(gioHang);
}
// xóa sản phẩm khỏi giỏ hàng
function xoaSanPham(id) {
    // tìm kiếm vị trí (chỉ số) cần xóa
    const index = gioHang.findIndex(sp => sp.id == id);
    // xóa 1 phần tử tại vị trí index
    gioHang.splice(index, 1);
    // hiển thị giỏ hàng
    const div = document.getElementById('gio-hang');
    let innerHTML = `<table border="1">`;
    for (let index = 0; index < gioHang.length; index++) {
        const sp = gioHang[index];
        innerHTML += `
            <tr>
                <td>${sp.name}</td>
                <td>${sp.price}</td>
                <td>
                    <button onclick="xoaSanPham(${sp.id})">Xóa</button>
                </td>
            </tr>
        `;
    }
    innerHTML += `</table>`;
    div.innerHTML = innerHTML;
    // tính tiền giỏ hàng
    tinhTien(gioHang);
}
// tính tiền giỏ hàng
function tinhTien(array) {
    // tính tổng tiền
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element.price;
    }
    // hiển thị tổng tiền
    const div = document.getElementById('so-tien');
    div.innerHTML = `Tổng tiền: ${sum}`;
}