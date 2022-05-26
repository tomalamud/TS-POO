export class MyDate {
  constructor(
    public year: number = 1999,
    public month: number = 7,
    public day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(
    amount: number,
    type: "days" | "months" | "years"
  ): void {
    if (type === "days") {
      this.day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2022, 5, 24);
myDate.add(3,"days");
console.log(myDate.printFormat())
console.log(myDate.getDay())
