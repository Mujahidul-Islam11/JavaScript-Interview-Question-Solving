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
    if (typeof value !== "string") {
      sum += value;
    }
  });

  console.log(sum);
}
