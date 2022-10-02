const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function divide(num1: number, num2: number): number {
  return num1 / num2;
}

// Annonymus function
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
// -------------
const logger = (msg: string): void => {
  console.log(msg);
};

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
