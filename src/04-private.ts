export class MyDate {
  private year: number;
  private month: number;
  private day: number;
  constructor(
    year: number,
    month: number,
    day: number
  ) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  addPadding(value: number) {
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
}

const myDate = new MyDate(2022, 5, 24);
myDate.add(3,"days");
console.log(myDate.printFormat())
