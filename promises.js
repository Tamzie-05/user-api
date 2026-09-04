// Create a Promise
let myPromise = new Promise(function(resolve, reject) {

// Code that might take some time goes here

  let success = true;
  if (success) {
    resolve("Done");
  } else {
    reject("Failed");
  }
});

// Using the Promise
myPromise.then(
  function(value) {myDisplayer(value)},
  function(value) {myDisplayer(value)}
);

// Funtion to display any text
function myDisplayer(text) {
  console.log(text);}