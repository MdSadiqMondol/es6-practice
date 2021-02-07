class Parent{
    constructor(){
        this.fatherName = "ami"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}

const baby = new Child("devon");
const baby2  = new Child("sovon");
console.log(baby,baby2.getFullName())