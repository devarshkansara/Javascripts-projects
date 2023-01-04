var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};
console.log(course.name);

//to update the value of the property on existing object.
var characters = {
    name: "DEVARSHI",
    age: "15"
};
console.log(characters.age = "21");
console.log(characters);

//add two properties in one property
var person = {
    firstname: "John",
    lastname: "Smith",
    fullname: function() { 
        return this.firstname + " " +this.lastname;
    }
};
console.log(person.fullname());