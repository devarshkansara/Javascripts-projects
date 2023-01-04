const target = {
    message1:"devarshi",
    message2:"kansara",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
console.log(proxy1.message1); //devarshi
console.log(proxy1.message2); //kansara