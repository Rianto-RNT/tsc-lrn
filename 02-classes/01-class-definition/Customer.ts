class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// let's create an isntance
// let myCustomer = new Customer();
let myCustomer = new Customer("Rianto", "RNT");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
