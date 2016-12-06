// var oceans = [
//   "Pacific",
//   "Atlantic",
//   "Artic",
//   "Anarctic",
//   "Indian" ];

// // a lot of data types come built in methods in array... or functional utilities

// // // Anonymous Function
// // oceans.map(function(value, index, array){
// //   console.log(value, index, array);
// // });


// // map internally tells when to call the function and when to return it.
// // map will execute the callback we pass to it once for each element in the 'oceans' array.
// // passing the function into the referrence

// // Named Function
// // function oceanMap (value, index, array){
// //   console.log(value, index, array);
// // }

// // oceans.map(oceanMap);

// // call it : (....()) referrence it: (...)


// // setInterval takes a callback and executes it every ...ms (2nd argument is ms)
// //setInterval(funtion()){
  


// // Filter() method will return an array that that passes a test we give it
// // Filter returns a new array that is a subset of the old array but with only the values that pass some sort of test

// function oceanFilter (value, index){
//   console.log('VALUE', index)
//   return value[0].toUpperCase() === 'A'
// }
// var oceansThatStartWithA = oceans.filter(oceanFilter);


// console.log(oceansThatStartWithA)

// Reduce

var startingMoney = 500;
var purchases = [
  
  
  
]

//how much left?

function debit(runningTotal,purchase){
  console.log("Running Total", runningTotal);
  return runningTotal - purchase.cost
  
}

var currentBalance = pruchases.reduce(debit, startingMoney);

console.log(currentBalance);





















