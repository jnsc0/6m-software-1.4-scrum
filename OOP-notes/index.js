/* 
BENEFITS OF OBJECT ORIENTED PROGRAMMING

1. ENCAPSULATION : group related variables and functions that operate on them into objects
- Reduce complexity + increase reusability

e.g

//this is how normal will be:

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate) {
    return baseSalary + (overtime * rate);
}


//but in OOP:


let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();



2. ABSTRACTION: Hide properties and method from interface.
- Reduce complexity + isolate impact of changes

3. INHERITANCE: Define once in generic object, other objects inherit these properties and methods.
eliminates redundant code


4. POLYMORPHISM: Refactor switch/case staments with render()

*/
/*Object literal {};
const circle = {
    radius: 1, //radius is a property. property is used to hold values
    location: { //location is a property
        x: 1,
        y: 1
    },
    draw: function() { //function is a method. method is used to define some logic
        console.log('draw by object literal');
    }
};

circle.draw();
*/

//Factories. Used when object has behaviour
//Object literal syntax is not a good way to create an object and duplicate if if the object has at least one method. If object has one or more methods, it is called object behaviour.

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw by factories');
        }
    };
}
const circle = createCircle(1);


//Constructor Function (this.  new and function must use Captial letter)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw by constructor function')
    }
}

const another = new Circle(1);

//Constructor Property