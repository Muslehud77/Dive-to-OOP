{
    class Animal {
        name:string;
        species:string;

        constructor(name:string,species:string){
            this.name = name
            this.species = species
        }

        makeSound(sound:string){
            console.log(`the ${this.name} makes ${sound} noise`);
        }

    }

    class Dog extends Animal{
        age: number

        constructor(name:string,species:string,age:number){
            super(name,species)
            this.age = age
        }
        makeBark(){
            console.log('I am barking');
        }
    }

    class Cat extends Animal{
        gender: string

        constructor(name:string,species:string,gender:string){
            super(name,species)
            this.gender = gender
        }
        makeMeaw(){
            console.log('Meaw Meaw Meaw');
        }
    }


    // smart way of handling

    const isDog=(animal:Animal):animal is Dog=>{
    return animal instanceof Dog
    }
    
    const isCat = (animal:Animal): animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal:Animal)=>{
       if(isDog(animal)){
        animal.makeBark()
       }else if(isCat(animal)){
        animal.makeMeaw()
       }else{
        animal.makeSound("hae")
       }
    }



    const dog = new Dog('tommy','dog',10)
    const cat = new Cat('tommy','dog','female')

    getAnimal(dog)
    getAnimal(cat)

}