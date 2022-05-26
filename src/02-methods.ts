export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.day}`;
  }

  add(amount: number, type: "days" | "months" | "years"): void {
    if (type === "days") {
      this.day += amount;
    }
  }
}

const myDate = new MyDate(2022, 5, 24);
myDate.add(3,"days");
console.log(myDate.printFormat())
