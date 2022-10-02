// Interface
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `Name: ${vehicle.name}\nYear: ${vehicle.year}\nisBroken? ${vehicle.broken}`
  );
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);
/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `Name: ${vehicle.name}\nYear: ${vehicle.year}\nisBroken? ${vehicle.broken}`
  );
};
printVehicle(oldCivic);
*/

// ---- Till Now Bad Practice -----

// So, let's use interfaces
