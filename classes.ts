class Vehicle {
  // color: string;
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep beep');
  }
}
const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('boom boom car');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
