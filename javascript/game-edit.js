var random = Math.floor(Math.random() * 52 + 19);
var num1 = Math.floor(Math.random()* 10 + 1);
var num2 = Math.floor(Math.random()* 10 + 1);
var num3 = Math.floor(Math.random()* 10 + 1);
var num4 = Math.floor(Math.random()* 10 + 1);

var userTotal = 0;
var wins = 0; 
var losses = 0;

$("#number-to-guess").text(random);


$("#wins").text(wins);
$("#losses").text(losses);

function reset(){
    random = Math.floor(Math.random() * 52 + 19);
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
$("#img1").on("click", function (){
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
        win();
    }
    else if (userTotal > random) {
        loss();
    }
});


$("#img2").on("click", function (){
    userTotal = userTotal + num2;
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
        win();
    }
    else if (userTotal > random) {
        loss();
    }
});
$("#img3").on("click", function (){
    userTotal = userTotal + num3;
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
        win();
    }
    else if (userTotal > random) {
        loss();
    }
});
$("#img4").on("click", function (){
    userTotal = userTotal + num4;
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
        win();
    }
    else if (userTotal > random) {
        loss();
    }
});
