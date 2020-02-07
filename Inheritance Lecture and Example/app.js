//the person constructor, our base pseudo-class
function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    alert(`Greetings, I am ${this.name}.`);
}

Person.prototype.sleep = function () {
    alert (`I am going to sleep now. My name is ${this.name}.`)
}

// The Teacher constructor, a child pseudo-class
function Teacher(name, age, dept) {
    //step 1 is to call the parent constructor function
    //if you choose to pass arguments up to parent, do so now
    Person.call(this, name, age);

    //after calling the parent constructor, set your own properties
    this.dept = dept;
}

//Make the Teacher prototype be a copy of the person prototype
//this means you have all the same methods as a person
Teacher.prototype = Object.create(Person.prototype);

//Now you have to reset the constructor back to Teacher
//This is because it would be set to person because of the previous line
Teacher.prototype.constructor = Teacher;

// This will effectively overwrite the greet function you inherited from person
Teacher.prototype.greet = function () {
    alert (`Hello, I am ${this.name}. I work in the ${this.dept} department.`);
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function () {
    alert (`Hi I'm ${this.name}. Im majoring in ${this.major}.`)
}


let p1 = new Person('John Jacobs', 29);
let t1 = new Teacher('Jasmine Jones', 26, 'Math');
let s1 = new Student('Jerico Jameson', 20, 'Computer Science');

console.log(p1);
console.log(t1);
console.log(s1);

p1.greet();
t1.greet();
s1.greet();

p1.sleep();
t1.sleep();
s1.sleep();


