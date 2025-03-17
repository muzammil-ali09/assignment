// function play(a){
//     var a = new Date()
//     document.write(a)
// }

// play()



// function greet(){
//     var a=prompt("Enter your first name");
//     var b= prompt("Enter your last name");
//     var c= a+b
//     console.log("hello",c)
// }
// greet()


// function sum(){
//     var a=+prompt("Enter 1st number")
//     var b=+prompt("Enter 2nd number")
//     var c=a+b
//     alert(c)
// }
// sum()

// function operator(){
//     var num1=+prompt("Enter 1st number");
//     var num2=+prompt("Enter 2nd number");
//     var assign=prompt("Enter operator +,-,*,/");

//     if(assign === "+"){
//         return num1 + num2 
//     }else if(assign === "-"){
//         return num1 - num2
//     } else if(assign === "*"){
//         return num1 * num2
//     } else if(assign === "/"){
//         return num1 / num2
//     }
// }

// operator();




// function square(num) {

//     return num * num;
// }


// console.log(square(4)); 



// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); 


// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }


// console.log(findLongestWord("Muhammad Saad")); 

// function capitalizeWords(str) {
//     return str.split(" ")
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(" ");
// }


// console.log(capitalizeWords("sir saad smit lab")); 