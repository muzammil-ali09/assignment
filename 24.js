let user = prompt("enter your name")

alert("hi" + " " + user)

let userCity = prompt("Please Enter your city");

if (userCity="karachi") {

    alert("wellcome to the city of light")
}

let gender = prompt("Please enter your gender (male/female):").toLowerCase();


if (gender === "male") {
  alert("Good Morning Sir.");
} 
else if (gender === "female") {
  alert("Good Morning Ma,am.");
}
 else {
  alert("Invalid input. Please enter either 'male' or 'female'.");
}



var pass = "admin"
var userPass = prompt("Enter your password")

if(userPass == null || userPass == ''){
    alert("enter any value please")
}
else if(userPass == pass){
    alert("Your password is correct")
}
else{
    alert("your password is wrong")
}