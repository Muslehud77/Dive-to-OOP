{
  //access modifier

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

    public addBalance(amount: number) {
      this._balance += amount;
      console.log(this._balance);
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod(){
        return this.getBalance()
    }
  }

  class studentAccount extends BankAccount {
    
    constructor(id: number, name: string, _savings: number, _balance: number) {
      super(id, name, _savings, _balance);
      
    }
  }

  const goribAccount = new BankAccount(111, "gorib", 10, 20);

  // goribAccount.addBalance(100)



  const myBalance = goribAccount.getHiddenMethod();

  console.log(myBalance);
}
