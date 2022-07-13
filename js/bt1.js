/**
 * Author: To Minh Y
 * Function: Tìm số chẵn/lẻ nhỏ hơn 100
 * Release : 13/7/2022
 */

function inChanLe() {
    var soChan = 0;
    var soLe = 0;
    for(var i = 0 ; i < 100 ; i++){
        if(i % 2 == 0){
            soChan +=  i + " ,";
        }else{
            soLe += i + " ,";
        }
    }


    document.getElementById("ketQua").innerHTML = "Danh sách số chẵn: " + soChan + "<br><br>" +
                                                "  <i class='fa-solid fa-hand-point-right'></i> Danh sách sổ lẻ: " +  soLe;
}
document.getElementById('btnTinh').onclick = inChanLe;