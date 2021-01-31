class Parent{
    constructor() {
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullname() {
        return `${this.name} ${this.fatherName}`;
    }
}
const baby = new Child('rujo');
const baby2 = new Child('Arnlod');
console.log(baby.getFullname());
console.log(baby2.getFullname());