{
    //oop class

    class Animal {
      //    public name: string;
      //    public species : string;
      //    public sound:string;

      // *parameter properties
        // by giving this public modifier to the constructor's argument/parameter we no longer need to declare it to the top and also don't need to initialize it in the constructor func
      constructor(
        public name: string,
        public species: string,
        public sound: string
      ) { 
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
      }

      makeSound() {
        console.log(`This ${this.species} makes ${this.sound} sound`);
      }
    }

    const dog = new Animal("German Shepard","dog","bark")

    const cat = new Animal("X","cat","meaw meaw")

    dog.makeSound()
    cat.makeSound()


}