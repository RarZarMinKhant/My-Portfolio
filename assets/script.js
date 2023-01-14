// AOS Animation
AOS.init({
    duration: 1800,
});

// Project Choose Animation
$(document).ready(function(){
    $("#All_Btn").click(function(){
        $('#design').slideDown(1000);
        $('#developement').slideDown(1000);
    });

    $("#Design_Btn").click(function(){
        $('#design').slideDown(1000);
        $('#developement').slideUp(1000);
    });

    $("#Developement_Btn").click(function(){
        $('#design').slideUp(1000);
        $('#developement').slideDown(1000);
    });
});