const empty: string[] = []; // Need Annotations
const carMakers = ['ford', 'mercedes', 'ferari'];
const dates = [new Date(), new Date()];

const carsMadeBy = [['f150'], ['benz'], ['sarara']]; // :string[][]

// Help with inference when extracting values
const myCar = carMakers[0]; // :string
const myCar2 = carMakers.pop(); // :string

// Prevent incompatible values
// carMakers.push(45);

// Help with 'map' , 'forEach',
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()]; // :(Date | string)[]
importantDates.push('2010-12-12');
importantDates.push(new Date());
