//if statement 
if (10>5) {
    var outcome = "if block";
}
console.log(outcome);

//else statement
if (30<20) {
    var outcome = "if block";
} else {
    var outcome = "else block";
}
console.log(outcome);

//else if statement
if (false) {
    var outcome = "if block";
} else if (true) {
    var outcome = "else if block";
} else {
    var outcome = "else block";
}
console.log(outcome);

//can write multiple if else conditionals, but only first else if block runs javascript skips any remaining conditionals after it runs the first one passes.
if (false) {
    var outcome = "if block";
} else if (true) {
    var outcome = "first else if block";
} else if (true) {
    var outcome = "second else if block";
} else {
    var outcome = "else block";
}
console.log(outcome);
