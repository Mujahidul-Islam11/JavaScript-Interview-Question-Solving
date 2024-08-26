// array - forEach, map, filter
// 1. Array er prottekti value er age hello print koro.
function problemOne(){
    var arr = ["hunny", "bunny", "popat"];

arr.forEach(function(value){
    console.log("Hello, " + value);
})
}

// 2. Array er protita value er moddhe jegula 2 er soman ar choto sudhu seguloi print koro with forEach
function problemTwo(){
    var arr2 = [1, 2, 3, 5, 6];
arr2.forEach(function(value){
    if(value<=2){
        console.log(value)
    }
})
}