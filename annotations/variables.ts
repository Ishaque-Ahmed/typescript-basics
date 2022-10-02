const apples = 5;

let age: number = 21;
age = 30;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

let nothig: undefined = undefined;

// Built in object
let now: Date = new Date();

// Array -> array of strings
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [4, 6, 7];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns 'any' type

const json = '{"x": 20, "y":10}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 20, y: 10}

// 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundword: boolean; // Better practice: let foundword = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundword = true;
}

// 3) When a variable type can not be inferred properly
// Bad Code

let newNumbers = [-1, -2, -43];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < newNumbers.length; i++) {
  if (newNumbers[i] > 0) {
    numberAboveZero = newNumbers[i];
  }
}
