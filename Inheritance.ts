{
    // oop inheritance

    class Person {
      name: string;
      age: number;
      address: string;

      constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
      }

      getSleep(numOfHours: number) {
        console.log(`${this.name} sleeps for ${numOfHours}h`);
      }
    }

    class Student extends Person{
        constructor(name:string,age:number,address : string){
            super(name,age,address)
        }
    }

    const student = new Student("X",10,"ctg")

    student.getSleep(10)
  


     class Teacher extends Person {
   
       designation: string;

       constructor(name: string, age: number, address: string,designation:string) {
        super(name,age,address)
         this.designation = designation
       }

       takeClass(numOfClass:number){
        console.log(`${this.name} takes ${numOfClass} classes`);
       }

     }

      const teacher = new Teacher("Xyz", 10, "ctg","Maths");

      teacher.takeClass(5)


}


