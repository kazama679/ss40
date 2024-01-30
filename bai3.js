$(document).ready(function(){
    $("#xoaCauThu").click(function(){
        var idCauThu = $("#nhapIdCauThu").val();
        xoaCauThu(idCauThu);
    });
});

function xoaCauThu(id) {
    console.log("Đã xóa cầu thủ");
}