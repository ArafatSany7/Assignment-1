function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

function getProperty<objectType, propertyKey extends keyof objectType>(
  obj: objectType,
  key: propertyKey,
): objectType[propertyKey] {
  return obj[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(array1: number[], array2: number[]): number[] {
  return array1.filter((item) => array2.includes(item));
}
