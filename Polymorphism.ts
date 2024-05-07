{
    // polymorphism

    class Person {
        getSleep(){
            console.log("sleeping for 8hours per day");
        }
    }

    class Student extends Person {
      getSleep() {
        console.log("sleeping for 7hours per day");
      }
    }

    class Developer extends Person {
      getSleep() {
        console.log("sleeping for 6hours per day");
      }
    }

    const getSleepingHours = (param:Person)=>{
        return param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHours(person3)
    getSleepingHours(person2)
    getSleepingHours(person1)


    class Shape {
        getArea():number{
            return 0
        }
    }

    class Circle extends Shape{
        radius:number;
        constructor(radius:number){
            super()
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Shape{
        height:number;
        width:number;

        constructor(height:number,width:number){
            super()
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    const circle = new Circle(10)
    const rectangle = new Rectangle(10,10)

    const getArea=(shape:Shape)=>{
        console.log(shape.getArea());
    }

    getArea(circle)
    getArea(rectangle)

}