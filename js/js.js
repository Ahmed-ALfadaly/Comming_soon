$(document).ready(function () {
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
    });

    //كود للدلاله عل استعداد المكتبه لتنفيذ الحركات ولكل مكتبه كود خاص
    var wow = new WOW({
        mobile: false
    });
    wow.init()

    $(function () {
        $('.form-control').blur(function () {
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.lenght) {
                $(this).parent().find(".alert.alert-danger").fadeIn(200);
                $(this).parent().find(".alert.alert-success").hide();
            }
            else {
                $(this).parent().find(".alert.alert-success").fadeIn(200);
                $(this).parent().find(".alert.alert-danger").hide();


            }
        });

        $(function () {
            $('.form-control').blur(function () {
                var x = document.forms["myForm2"]["email2"].value;
                var atpos = x.indexOf("@");
                var dotpos = x.lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.lenght) {
                    $(this).parent().find(".alert.alert-danger").fadeIn(200);
                    $(this).parent().find(".alert.alert-success").hide();
                }
                else {
                    $(this).parent().find(".alert.alert-success").fadeIn(200);
                    $(this).parent().find(".alert.alert-danger").hide();
                }
            });
        });
    });
});


