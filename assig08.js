// function power(a, b) {
//     let result = 1;
//     let isNegative = false;

    
//     if (b < 0) {
//         isNegative = true;
//         b = -b; 
//     }

    
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }

    
//     return isNegative ? 1 / result : result;
// }


// console.log(power(2, 4));   



// 
// function isLeapYear(year) {
    
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }



// function calculateNotes(amount) {
    
//     let total = amount * 100;

  
//     let hundred = Math.floor(total / 100);
//     total %= 100;

//     let fifty = Math.floor(total / 50);
//     total %= 50;

//     let ten = Math.floor(total / 10);

    
//     console.log(`You will have ${hundred} hundred notes, ${fifty} fifty notes, ${ten} ten notes.`);
// }


// let input = parseInt(prompt("Enter amount to withdraw (in hundreds):"));
// calculateNotes(input);






// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12;

//     let overtimeHours = 0;
//     let overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     console.log(`Overtime hours: ${overtimeHours}`);
//     console.log(`Overtime pay: Rs. ${overtimePay}`);
// }


// let hours = parseInt(prompt("Enter total hours worked:"));
// calculateOvertimePay(hours);




// function removeVowels(sentence) {
   
//     let result = sentence.replace(/[aeiouAEIOU]/g, '');
//     return result;
// }


// let input = prompt("Enter a sentence (max 25 characters):");


// if (input.length > 25) {
//     console.log("Sentence is too long. Please enter up to 25 characters.");
// } else {
//     let noVowels = removeVowels(input);
//     console.log("Sentence without vowels: " + noVowels);
// }
