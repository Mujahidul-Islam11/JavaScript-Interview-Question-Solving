// array - forEach, map, filter
// 1. Array er prottekti value er age hello print koro.
function problemOne() {
  var arr = ["hunny", "bunny", "popat"];

  arr.forEach(function (value) {
    console.log("Hello, " + value);
  });
}

// 2. Array er protita value er moddhe jegula 2 er soman ar choto sudhu seguloi print koro with forEach
function problemTwo() {
  var arr2 = [1, 2, 3, 5, 6];
  arr2.forEach(function (value) {
    if (value <= 2) {
      console.log(value);
    }
  });
}

// 3. Array er prottek value er sum ber koro with forEach
function problemThree() {
  var arr3 = [1, 2, 34, 5];

  var sum = 0;
  arr3.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

// 4. Array er sob value er sum ber koro ar jodi kono value string hoye thake tobe skip koro
function problemFour() {
  var arr = [1, 23, 5, "45", 3];

  var sum = 0;
  arr.forEach(function (value) {
    if (typeof value !== "number") {
      sum += value;
    }
  });

  console.log(sum);
}

// 5. Ekta function er moddhe eta input naw, ar oi input (parameter) ti array ki nah seta return koro.
function problemFive(){
    // 1st way
    function arrFunc(input){
        return console.log(Array.isArray(input))
    }
    
    arrFunc([2,3,4]);
    arrFunc(3);

    // 2nd way 
    function arrFunc(input){
        return console.log(input instanceof Array)
    }
    
    arrFunc([2,3,4]);
    arrFunc(2);
}

// 6. Ekti function likho jetar input a ekti array thakbe ar oi function ti input er array ti clone
// kore return korbe.
function problemSix(){
    function cloneArray(inp){
        var clone = [...inp];
        return console.log(clone);
    }
    
    cloneArray([3,2,5,2]);
}

// 7. Ekti function likho ekti array first element ke get korar jonno. 
// Ekti jeikono "n" (number) pass korle parameter hisebe
// oi function ti oi number onujai array theke element return korbe.
// example:- func([1,24,5546,67], 3) array er sathe 3 pass korchi tai function ti  3 ta element 
// return korbe array theke.
function problemSeven(){
  function getter(inp, get=1){
    var cloned = [];
    for(var i = 0; i<get; i++){
      cloned.push(inp[i])
    }
    return console.log(cloned)
    }
    
    getter([3,45,56,75,6], 3)
}

// 8. Ekti function likho jeti ekti array er sob string element ba values guloke sum kore return korbe
function problemEight(){
  // 1st solution
  function joiner(inp){
    var summedEl = '';
    inp.forEach(function(el){
      summedEl+= el + ","
    })
    return console.log(summedEl);
    }
    
    joiner(["anana", "banana", "sanana", "manana"])

    // 2nd solution 
    
function joiner(inp){
  return console.log(inp.join(","));
  }
  
  joiner(["anana", "banana", "sanana", "manana"])
}


// 9. Bibhinno way te JavaScript object create koro
function problemNine(){
  var obj = {} // Object literal
var obj1 = Object.create(null);
function obj2(){
  this.name = "Dinar"
}
new obj2()

class obj3{
 constructor(){}
  a = 12;
}
var ans = new obj3();
// new - empty object
}

// 10. What is hof?
function problemTen(){
  function hof(inp){
    return function(inp2){console.log(inp+inp2)}
  }
  
  hof(10)(20)
}

// 11. this, apply, call, bind
function problemEleven(){
  function thisFunc(){
    // this = haramzada keyword
  // global = window
  console.log("global:",this)
  // function = window
  function winThis(){
  console.log("function:",this)
  }
  winThis()
  // method = object
  var obj = {
    name: "dinar",
    sayname: function(){
      console.log("method:",this)
    }
  }
  obj.sayname()
  // func es5 inside method = window
  // func es6 inside method = object
  }
}


// array - map, filter
// 12. ekti array er upor map calaw ar prottekti element er sathe dui sum kore arekti array te rakho
function problemTwelve(){
  const arr = [1,2,3,4];
  var ans = arr.map(function(arrEl){
  return arrEl * 2;
  })
  console.log(ans) // map created na imaginary array
}
// map - map ekdom forEach er motoi kaj kore kintu map return korte pare ar foreach parenah

// 13. ekti array er prottekti element er upor map calaw ar element er length jodi 5 hoi tobe p
// tag er moddhe add koro, ar nah hole span er moddhe add koro
function problemThirteen(){
  const arr = ["banana", "apple", "coconut", "guava"];

const ans = arr.map(function(arrEl){
  if(arrEl.length === 5){
    return `<p>${arrEl}<p/>`
  }
  else{
    return `<span>${arrEl}<span/>`
  }
})

console.log(ans)
}

// 14. ekti array of objects ache jeikhane onek gulo data ache and oi data gulor name ke niye arekti
// array toiry koro
function problemFourteen(){
  var arr = [{name:"dinar", age: 19}, {name:"dinari", age:18}, {name: "ranid", age:null}]

const ans = arr.map(function(arrEl){
  return arrEl.name
})

console.log(ans)
}

// filter
// 15. ekti array of object theke jei object er bhitore dinar namer property ache ota filter kore niye aso
function problemFifteen(){
  var arr = [{name:"dinar", age: 19}, {name:"dinari", age:18}, {name: "ranid", age:null}]

const ans = arr.filter(function(arrEl){
  return arrEl.name === "dinar"
})

console.log(ans)
}

// 16. ekti array er upor filter calale filter sobsomoi boolean return kora cai
function problemSixteen(){
  var arr = [1,2,4,56,4];
(arr.filter(function(el){
  return true // true dile el element gula nije nije imaginary array te store hoye jabe, ar false dile hobe nah
}))

const ans = arr.filter(function(el){
  if(el%2 ==0){
    return true
  }
})

console.log(ans)
}

// 17. array er moddhe emon sob naam jader moddhe "a" ache oi naam gula remove kore daw
function problemSeventeen(){
  var arr = ["dinar", "ema", "ranid", "ame", "ee", "dd"];
const ans = arr.filter(function(el){
  return !el.includes("a")
})
console.log(ans)
}

