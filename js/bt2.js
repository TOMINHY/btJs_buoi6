/**
 * Author: To Minh Y
 * Function: Đếm số chia hết cho 3
 * Release : 13/7/2022
 */



function demSoChiaHet3(){
    var soChiaHet3 = 0;
    var count = 0;
    for(var i = 0 ; i < 1000; i++){
        if(i % 3 == 0){
          soChiaHet3 += i;
          count++;
        }else{
           count;
        }
    }
    document.getElementById('ketQua2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById('btnHi').onclick = demSoChiaHet3;

