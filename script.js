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
