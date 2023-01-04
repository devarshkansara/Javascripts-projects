function circumference(r) {
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
//expected output: 28.69530....

console.log(circumference('4.567abcdefgh'));
//expected output:28.69530....

console.log(circumference('abcdefgh'));
//expected output:NaN