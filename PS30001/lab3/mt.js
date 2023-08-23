var ketQua = "";

function chonSo(so) {
    ketQua += so;
    document.getElementById("kq").value = ketQua;
}

function chonPhepTinh(phepTinh) {
    ketQua += " " + phepTinh + " ";
    document.getElementById("kq").value = ketQua;
}

function tinhToan() {
    var ketQuaKetThuc = eval(ketQua);
    document.getElementById("kq").value = ketQuaKetThuc;
    ketQua = ketQuaKetThuc.toString();
}

function xoaKetQua() {
    ketQua = "";
    document.getElementById("kq").value = ketQua;
}