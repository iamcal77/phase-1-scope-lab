// Write your solution in this file!
// index.js

var customerName = "bob";


var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}


function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
  }
 // index.js

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This line will throw an error
}
 