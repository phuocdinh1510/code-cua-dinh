function tinhtien() {
    var soluong = Number(document.getElementById("soluong").value);
    var dongia = Number(document.getElementById("dongia").value);

    var khuyenmai = 0;
    if (soluong > 10) {
        khuyenmai = (soluong * dongia) * 0.1;
    } else if (soluong > 5) {
        khuyenmai = (soluong * dongia) * 0.05;
    }

    var thanhtien = dongia * soluong - khuyenmai;
    document.getElementById("thanhtien").value = thanhtien;
    document.getElementById("khuyenmai").innerHTML = khuyenmai
}