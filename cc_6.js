// Coding Challenge 6

// Base Class
class Employee {
    constructor(name, department) {
    this.name = name;
    this.department = department;
    console.log("Employee: " + this.name + ", Department: " + this.department);
}

describe () {
    return `${this.name} works in the ${this.department} department.`;
}
}

// Subclass for Managers
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
     console.log("Manager: " + this.name + ", Department: " + this.department + ", Team Size: " + this.teamSize);
    }

describe() {
    return `${super.describe()} They manage a team of ${this.teamSize} people.`;   
}
}

// Employees Database
const e1 = new Employee("Munisa", "Finance");
console.log(e1.describe());
const e2 = new Employee("Daniel", "Marketing");
console.log(e2.describe());
const e3 = new Employee("Sarah", "IT");
console.log(e3.describe());
const e4 = new Employee("John", "Operations");
console.log(e4.describe());
const e5 = new Employee("Linda", "Customer Service");
console.log(e5.describe());

// Managers Database
const m1 = new Manager("Carla", "HR", 5);
console.log(m1.describe());
const m2 = new Manager("Maria", "Sales", 10);
console.log(m2.describe());
const m3 = new Manager("Carlos", "Development", 8);
