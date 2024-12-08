// var elzero = document.getElementById('el');

// elzero.innerHTML ='Elzero';
// elzero.style.color = 'blue';
// elzero.style.fontSize = '80px';
// elzero.style.fontWeight = 'bold';
// elzero.style.textAlign = 'center';
// elzero.style.fontFamily = 'Arial';

// console.log('%cElzero %cWeb %cSchool', 'color: red; font-size: 40px;', 'color: green; font-size: 40px; font-weight: bold;', 'color: blue; font-size: 40px;');

// console.group('group 1');
// console.log('message 1');
// console.log('message 2');
// console.group('group 1');
// console.log('message 1');
// console.log('message 2');
// console.groupCollapsed('group 1');
// console.log('message 1');
// console.log('message 2');
// console.groupEnd('');
// console.groupEnd('');
// console.group('group 2');
// console.log('message 1');
// console.log('message 2');
// console.groupEnd('');


// console.table(['kareeam', 'kareeam', 'kareeam', 'kareeam']);



// let numberOne = 10;
// let numberTwo = 20;

// console.log(String(numberOne) + numberTwo);
// console.log(typeof (String(numberOne) + numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);

// console.log(numberOne + "\n" + numberTwo);

// console.log(`${numberOne}\n${numberTwo}`);

// console.log(parseFloat('4.5'));

// elzero.innerHTML = 'object'
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object



// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_


// let num = 3;
// num1 ++;
// // Solution One
// console.log(); // 6

// // Solution Two
// console.log("Write Your Code Here"); // 6

// // Soultion Three
// console.log("Write Your Code Here"); // 6

// // Soultion Four
// console.log("Write Your Code Here"); // 6

// // Solution Five
// console.log("Write Your Code Here"); // 6

// // Solution Six
// console.log("Write Your Code Here"); // 6


// // Examples
//  // 100000

// // Your Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(Number('100' + '000')); // 100000
console.log(Number('100000')); // 100000
console.log(+'100000'); // 100000
// console.log(Number(string(100) + Number(false) + Number(false) + Number(false))); // 100000
console.log(Number('200000') - 300000); // 100000




console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991



let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar)); // 100.57



let num = 10;

console.log(Math.abs(Number.isInteger(num) - 3)); // 2





let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt - (flt - Math.trunc(flt))); // 10

// هنا النتيجه هتكون رقم عشوائي ما بين 0 - 10 والرقم 0 شامل والرقم 10 غير شامل
var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// هنا النتيجه هتكون رقم عشوائي ما بين 0 - 10 والرقم 0 شامل و الرقم 10 غير شامل
randomNumber = parseInt(Math.random() * 10);
console.log(randomNumber);

// هنا النتيجه هتكون رقم عشوائي ما بين 0 - 10 والرقم 0 شامل و الرقم 10 غير شامل
randomNumber = Math.trunc(Math.random() * 10);
console.log(randomNumber);

// هنا النتيجه هتكون رقم عشوائي ما بين 0 - 10 والرقم 0 غير شامل والرقم 10 شامل
randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

// هنا النتيجه هتكون رقم عشوائي ما بين 0 - 10 والرقم 0 غير شامل والرقم 10 شامل
randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);



let userName = "Elzero";
console.log(userName[1].toLowerCase()); // e
console.log(userName.charAt(3).toLowerCase()); // e
console.log(userName.slice(3,4).toLowerCase());
let x = userName[3].toLowerCase() ; // e
console.log(userName.split('')[1].toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(x.repeat(3)); // eee


