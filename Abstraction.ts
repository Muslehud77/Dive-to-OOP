{
    //abstraction

    // 1. interface
    // 2. abstract

    interface Vehicle1{
      startEngine() : void;
      stopEngine() : void;
      move() : void
    }

    // const vehicle1 : Vehicle1 = {
    //     name: "tesla",
    //     model:"model Y"
    // }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the engine');
        }

        stopEngine(): void {
            console.log('I am stopping the engine');
        }

        move(): void {
            console.log('I am moving the car');
        }
        test(){
            console.log('hello from test');
        }
    }

    const toyota = new Car1()

    toyota.move()

    //abstract class

    abstract class Car2 {
      abstract startEngine(): void;

      abstract stopEngine(): void;

      abstract move(): void;

      abstract test():void;
    }

    class ToyotaCar extends Car2 {
      startEngine(): void {
        console.log("I am starting the engine");
      }

      stopEngine(): void {
        console.log("I am stopping the engine");
      }

      move(): void {
        console.log("I am moving the car");
      }
      test() {
        console.log("hello from test");
      }
    }


    const honda = new ToyotaCar()

    honda.test()





}