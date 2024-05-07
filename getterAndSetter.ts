{
  //getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _savings: number;
    private _balance: number;

    constructor(id: number, name: string, _savings: number, _balance: number) {
      this.id = id;
      this.name = name;
      this._savings = _savings;
      this._balance = _balance;
    }

    // public addBalance(amount: number) {
    //   this._balance += amount;
    //   console.log(this._balance);
    // }

    // public getBalance() {
    //   return this._balance;
    // }


    //setter

    set deposit(amount:number){
        this._balance += amount

    }


    //getter
    get balance(){
        return this._balance
    }


  }



  const goribAccount = new BankAccount(111, "gorib", 10, 20);

  // goribAccount.addBalance(100)

//   const myBalance = goribAccount.getBalance();

goribAccount.deposit = 50
const myBalance = goribAccount.balance

console.log(myBalance);

 
}
