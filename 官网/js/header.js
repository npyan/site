// 导航显示隐藏
$(document).ready(function () {
    $("#icons").click(function () {
        $('#navs').show();
        $('#bgcolor').show();
    });
    $("#bgcolor").click(function () {
        $('#navs').hide();
        $('#bgcolor').hide();
    });
    $("#Closes").click(function () {
        $('#navs').hide();
        $('#bgcolor').hide();
    });



    $('#online_contact').click(function () {
        $('#scan_bg').show();
        $('#scan_close').show();
    });
    $('#scan_close').click(function () {
        $('#scan_bg').hide();
        $('#scan_close').hide();
    })
});
