var breakfast = ["coffee", "croissant"];
console.log(breakfast);

//Elements can be any kind of JavaScript value — even other arrays.
var hodgepodge = [100,"paint", [200,"brush"],false];
console.log(hodgepodge);

//to get last element by using brackets and "1" less than array's length property.
var sports = ["football", "basektball", "pool"];
console.log(sports[sports.length - 1]);

//setting an element's value.
var colors = ["red", "yelo", "blue"];
colors[1] = "yellow";
console.log(colors);

//length
var sem = ['a','b','c',1,2,3].length;
console.log(sem);

//concat
var food = ["pasta"].concat(["pizza"]);
console.log(food);

//pop
var city = ["vadodara", "ahemdabad", "surat"].pop();
console.log(city);

//push
var student = ["abc", "bcd", "cde"].push(8);
console.log(student);

//reverse
var country = ["INDIA", "CANADA", "USA"].reverse();
console.log(country);
