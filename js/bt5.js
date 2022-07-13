/**
 * Author: To Minh Y
 * Function: Tính giai thừa
 * Release: 13/7/2022
 */

function giaiThua(){
    var n = Number(document.getElementById("giaiThua").value);
    var ketQua = 1;
    for(var i = 1; i <= n ; i++){
       if(n > 1){
         ketQua *= i;
       }else if(n == 0 || n == 1){
        ketQua = 1; 
       }else{
        alert("Nhập số đi nào!")
       }
    }
    document.getElementById("ketQua5").innerHTML = ketQua;
}
document.getElementById("btnTinh5").onclick = giaiThua; 