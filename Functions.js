
// What are Functions?

// Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
} sayThanks('Cole')

// Calling a Function

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
} sayThanks()
  sayThanks()
  sayThanks()

  // Function Declarations

  function getReminder(){
  console.log('Water the plants');
}

function greetInSpanish(){
  console.log('Buenas Tardes.');
}

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
 
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
 
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

// Return

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

function monitorCount(rows, columns){
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)

// Helper Functions

function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

unction monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns)
* 200
}
const totalCost = costOfMonitors(5,4);

console.log(totalCost)

// Function Expressions

const plantNeedsWater = function (day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};
 plantNeedsWater('Tuesday')

 console.log(plantNeedsWater('Tuesday'));

 //Arrow Functions

 const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

const plantNeedsWater = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise Body Arrow Functions

const squareNum = (num) => {
  return num * num;
};
const squareNum = num => num * num;

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
