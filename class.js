class student{
    constructor(sId , sName){
        this.id  = sId;
        this.name = sName;
        this.school = "tmkm"
    }
}

const student1 = new student(12, "sovo");
const student2 = new student(223 , "gghosh");
console.log(student1,student2.id)