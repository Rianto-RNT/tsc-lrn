class Customer {
  
  private _firstName: string;
  private _lastName: string;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): string {
    return this.firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this.lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}

// let's create an isntance
let myCustomer = new Customer("Rianto", "RNT");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
