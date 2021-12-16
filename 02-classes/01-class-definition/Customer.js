var Customer = /** @class */ (function () {
  function Customer(theFirst, theLast) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
  return Customer;
})();
// let's create an isntance
// let myCustomer = new Customer();
var myCustomer = new Customer("Rianto", "RNT");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
