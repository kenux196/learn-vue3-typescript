export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  changeName(name: string) {
    this.name = name;
  }

  toDisplaay() {
    // console.log(JSON.stringify(this));
    console.log(this);
  }
}
