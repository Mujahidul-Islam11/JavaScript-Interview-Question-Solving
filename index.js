// reverse a string
function reverseString() {
  var str = "Mojahidul Islam Osmani (Dinar)";

  var fullstring = str.split(" ").map(function (sstr) {
    return sstr.split("").reverse().join("");
  });

  console.log(fullstring.join(" "));
}

// check a value wether it's an array or not
function checkArray() {
  function abcd(elem) {
    return console.log(Array.isArray(elem));
  }

  abcd([]);
  abcd({});
}

// empty an array without reset, without any loop and also without using pop
function emptyArray() {
  var arr = [1, 2, 3, 4, 5, 5];
  arr.length = 0;
  console.log(arr);
}

// how would you check if a number is an integer without using isInteger?
function checkInteger() {
  var a = 12;
  if (a % 1 === 0) {
    console.log("integer");
  } else {
    console.log("decimal");
  }
}

// make this work: duplicate([1,2,3,4]) -> [1,2,3,4,1,2,3,4]
function duplicateArray(){  
function duplicate(arr){
    return console.log(arr.concat(arr))
}
duplicate([1,2,3,4])
}

// reverse a number
function reverseNum(num){
    return console.log(Number(num.toString().split("").reverse().join("")))
}

reverseNum(25)