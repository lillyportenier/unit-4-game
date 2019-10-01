var targetNumber = 53;
var counter = 0;
var wins = 0;
var losses = 0;


$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
    var imagePuppy = $("<img>");
    imagePuppy.addClass("puppy-image");
    imagePuppy.attr("src", "http://3.bp.blogspot.com/-JrlY7xnioKs/Ufg0PepAc7I/AAAAAAAADlM/JREyEbUXDsw/s1600/IMG_8988.JPG");
    imagePuppy.attr("data-puppyvalue", numberOptions[i]);
    $("#puppys").append(imagePuppy);
}



    
    $(".puppy-image").on("click", function () {
    
    var puppyValue = ($(this).attr("data-puppyvalue"));
    puppyValue = parseInt(puppyValue);

    counter += puppyValue;


    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You WIN!!!");
    }
    else if (counter >= targetNumber) {
        losses++;
        $("#losses").innerHTML = losses;
        alert("You lost!!");
        


    }
});

