/**
 * Author: To Minh Y
 * Function: Tìm số nguyên dương nhỏ nhất 
 * Release : 13/7/2022
 */


function timSoNguyenDuongNhoNhat() {
     var sum = 0;
     for(var i = 0; sum < 10000; i++){
         sum += i;
         sum++;
     }
   document.getElementById('ketQua3').innerHTML = "Số nguyên dương nhỏ nhất: " + i;
  
}
document.getElementById('btnTinh3').onclick = timSoNguyenDuongNhoNhat;