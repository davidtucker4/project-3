// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//4-B
let bitBatBotOrNot = (n) => {
  //your code goes here
  let result = "";

  if (n % 3 == 0) {
    result = `${result}Bit`;
  }

  if (n % 5 == 0) {
    result = `${result}Bat`;
  }

  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
    result = `${result}Not`;
  }

  return result;
};

//4-C
let findAllbitBatBotOrNots1 = (arr) => {
  return arr.map(each => `${each}:` + bitBatBotOrNot(each));
};
console.log(findAllbitBatBotOrNots1([9, 10, 28, 30, 34, 105]));

//4-D
let findAllbitBatBotOrNots2 = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
  result.push(arr[i]+": "+bitBatBotOrNot(arr[i]));
  }
  return result;
};
console.log(findAllbitBatBotOrNots2([9, 10, 28, 30, 34, 105]));

//4-E
let findAllbitBatBotOrNots3 = (arr) => {
  let result = [];
  for(let each of arr){
  result.push(each+": "+bitBatBotOrNot(each));
  }
  return result;
};
console.log(findAllbitBatBotOrNots3([9, 10, 28, 30, 34, 105]));

//4-F
let findAllbitBatBotOrNots4 = (arr) => {
  let result = [];
  arr.forEach(
    (each) => {
      result.push(each+": "+bitBatBotOrNot(each));
    }
  );
  return result;
};
console.log(findAllbitBatBotOrNots4([9, 10, 28, 30, 34, 105]));

//Extra Credit
let findAllbitBatBotOrNotsXC = (arr) => {
  let result = [];
  for(let each in arr){
  result.push(arr[each]+": "+bitBatBotOrNot(arr[each]));
  }
  return result;
};
console.log(findAllbitBatBotOrNotsXC([9, 10, 28, 30, 34, 105]));

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
