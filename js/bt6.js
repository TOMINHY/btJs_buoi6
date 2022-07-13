/**
 * Author: To Minh Y
 * Function: Tạo thẻ div chẵn/lẻ
 * Release: 13/7/2022
 */

function divChanLe(){
    var num = 10;
    var content = "";
    for(var i = 0 ; i < num ; i ++){
        if (i% 2 != 0) {
            content += "<div class='bg-danger text-white px-2 py-2'> Div chẵn</div>";
        }else{
            content += "<div class='bg-primary text-white px-2 py-2'> Div lẻ</div>";
        }
    }
    document.getElementById("ketQua6").innerHTML = content; 
}
document.getElementById("btnTinh6").onclick = divChanLe;