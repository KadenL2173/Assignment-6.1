function playCraps() {
    //this is a one line comment
    /*this is function to play craps in game.html
    rules for craps
    Roll two dice
    add up to 7 or 11, you lose
    if they are doubles and even, you win!
    everything else is a push
    Kaden Longworth
    13August2024

    Adding checkCreds() function for input validation on strings.html page
    2. make variabke containing first name + space + last name
    3. Check for how many characters, >=20 present error
        1. less than 20, good entry
    4. Check to see if zip code is accurate
    5. Good name and zip, give secret message
    Kaden Longworth
    14August2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for a loss
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You lost to the Blade Runner!";
    } else if (die1 == die2 && die1 % 2 == 0) {           //look for a win
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You beat the Blade Runner!";
    } else {  //everything else is a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "You did not win or lose.";
    }

}

function checkCreds(){
    //input validation code from week 5
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of login";

    //make required variables
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var firstNameLength;
    var zipCodeNumb;

    //extract required variables
    firstName = document.getElementById("fName").value;
    console.log("the first name was entered as: " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("the last name was entered as: " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("the zipcode was entered as:" + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    fullNameLength = fullName.length;
    console.log("The variable fullName has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode);
    console.log("The actual zip code number is " + zipCodeNumb);

    //testing 2 tests, full name and zipcode

    if(fullNameLength > 20 || fullNameLength <2){
        console.log("Invalid full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode"
    } else {
        alert("user credientals passed, welcome to the site, " + fullName);
        document.getElementById("loginStatus").innerHTML = "credientals passed";
    }
}