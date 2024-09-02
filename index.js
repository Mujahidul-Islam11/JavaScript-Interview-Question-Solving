// reverse a string
var str = "Mojahidul Islam Osmani (Dinar)";

var fullstring = str.split(" ")
.map(function(sstr){
    return sstr.split("").reverse().join("")
})

console.log(fullstring.join(" "));