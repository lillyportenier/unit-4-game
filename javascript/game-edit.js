$(document).ready(function(){
    var random = Math.floor(Math.random() * 101 + 19);
    
    $("#number-to-guess").text(random);
    
    var num1 = Math.floor(Math.random()* 10 + 1);
    var num2 = Math.floor(Math.random()* 10 + 1);
    var num3 = Math.floor(Math.random()* 10 + 1);
    var num4 = Math.floor(Math.random()* 10 + 1);

    var userTotal = 0;
    var wins = 0; 
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    function reset(){
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $("#number-to-guess").text(random);
        num1 = Math.floor(Math.random()* 10 + 1);
        num2 = Math.floor(Math.random()* 10 + 1);
        num3 = Math.floor(Math.random()* 10 + 1);
        num4 = Math.floor(Math.random()* 10 + 1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }
    function win(){
        wins++;
        alert("YOU WON!!");
        $("#wins").text(wins);
        reset();
    }
    function loss(){
        losses++;
        alert("You lost!");
        $("#losses").text(losses);
        reset();
    }
    





})