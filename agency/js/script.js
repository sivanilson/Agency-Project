$(document).ready(function(){
    $("#menu-btn").click(function(){
        $("#links").slideToggle(2000);
        $("#menu-btn").toggleClass("turn");
    })
})