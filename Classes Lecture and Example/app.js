// let p1 = {
//     name: 'James',
//     sayHello: function() {
//         alert (`Hi! I am ${this.name}.`);
//     }

// };

// let p2 = {
//     name: 'Jacinda',
//     sayHello: function () {
//         alert (`Hi! I am ${this.name}.`);
//     }
// };

// p1.sayHello();
// p2.sayHello();


//Pseudo-Class

//Bellow is a constructor function. Use a capital letter
function Person (name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    alert('Hello my name is ' + this.name + '! I am ' + this.age + ' years old.');
}


//or if you don't want to do that you can do this:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         alert('Hello my name is ' + this.name + '! I am ' + this.age + ' years old.');
//     }
// }

Person.prototype.sayGoodNight = function () {
    alert(this.name + ' is going to bed now.');
}


let p1 = new Person ('Jane', 29);
let p2 = new Person ('Katherine' , 19);

p1.sayHello();
p2.sayHello();

p1.sayGoodNight();
p2.sayGoodNight();

