$(document).ready(function() {
    $("#login").click(function() {
        $("article").load("dangnhap.html");
    });
    $("#SignUp").click(function(){
        $("article").load("dangky.html")
    });
    $("#gopy").click(function(){
        $("article").load("gopy.html")
    });
    $("#lienhe").click(function(){
        $("article").load("lienhe.html")
    });
    $("#mienbac").click(function(){
        $("article").load("mienbac.html")
    });
    $('#miennam').click(function(){
        $("article").load("miennam.html")
    });
    $('#mientrung').click(function(){
        $("article").load("mientrung.html")
    });
    $('#traodoi').click(function(){
        $("article").load("hoidap.html")
    });
    
});
