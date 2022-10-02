const profile = {
  pro_name: 'alex',
  pro_age: 20,
  coordinates: {
    lat: 20,
    lng: 30,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
// Destructure + Annonatations
const { pro_name, pro_age }: { pro_name: string; pro_age: number } = profile;
const {
  coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
