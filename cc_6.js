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

//
