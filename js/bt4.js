/**
 * Author: To Minh Y
 * Function: Dự đoán hình tam giác
 * Release: 13/7/2022
 */



function tinhTongXN(){
   var x = Number(document.getElementById("nhapX").value);
   var n = Number(document.getElementById("nhapN").value);
   var tong = 0;
   var y = 1;
   for(var i = 0 ; i < n ; i++){
     tong +=  Math.pow(x,y);
     y++;
   }
  
    document.getElementById("ketQua4").innerHTML = "Tổng: " +tong;
}
document.getElementById("btnTinh4").onclick = tinhTongXN;