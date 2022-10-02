const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// Type Alias
type Drink = [string, boolean, number];
// Tupples
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['blue', true, 60];

// CSV files => tupples

// Why no use of tupples
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354,
};
