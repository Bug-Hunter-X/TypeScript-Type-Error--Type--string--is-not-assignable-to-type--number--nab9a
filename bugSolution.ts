function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: both arguments are numbers

//Alternatively, you could use type guards or other type assertion techniques for more complex scenarios
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return 0; //Or throw an error or handle in some other way
  }
}
let result2 = addSafe(5,'10'); //this will return 0
let result3 = addSafe(5,10); //this will return 15