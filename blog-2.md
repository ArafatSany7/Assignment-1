# Building for Scale: How the 4 Pillars of OOP Tame Complexity in TypeScript

## Introduction
As TypeScript projects grow from simple scripts into massive enterprise applications, managing logic and maintaining code quality becomes a monumental challenge.This is where Object-Oriented Programming (OOP) comes to the rescue. By using the four pillars of OOP—Encapsulation, Abstraction, Inheritance, and Polymorphism developer can organize code into predictable, modular, and highly scalable architectures.

---

## 1. Encapsulation
In large projects if every part of our application can modify the state of an object, tracking down bugs becomes nearly impossible . TypeScript enforces encapsulation using access modifiers like `private`, `protected`, and `public`.

```typescript
class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    public getBalance(): number {
        return this.balance;
    }
}
const myAccount = new BankAccount(100);
myAccount.deposit(50);
```
this prevents external code from putting objects into an invalid state, reducing unexpected side effects.

## 2. Abstraction
Abstraction focuses on hiding the complex, underlying implementation details of a system and only exposing the essential features to the user.
```typescript
abstract class DatabaseHandler {
    abstract connect(): void;
    disconnect(): void {
        console.log("Disconecting from database");
    }
}
class PostgresHandler extends DatabaseHandler {
    connect(): void {
        console.log("Connecting to PostgrSQL.");
    }
}
```
It allows developers to interact with complex subsystems through simple, predictable interfaces without needing to understand the convoluted logic underneath.


## 3. Inheritance
Inheritance allows a new class to inherit properties and methods from an existing class. This establishes a natural hierarchy.
```typescript
class Employee {
    constructor(public name: string, public id: number) {}
    getDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}
class Manager extends Employee {
    public teamSize: number;
    constructor(name: string, id: number, teamSize: number) {
        super(name, id); 
        this.teamSize = teamSize;
    }
}
```
It centralizes shared logic. If a core behavior needs to change, we only have to update it in one place (the parent class), and the change cascades securely to all child classes.


## 4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows the same method to behave differently based on the object that invokes it.
```typescript
class Shape {
    calculateArea(): number {
        return 0;
    }
}
class Circle extends Shape {
    constructor(private radius: number) { super(); }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(private side: number) { super(); }
    calculateArea(): number {
        return this.side * this.side;
    }
}
const shapes: Shape[] = [new Circle(5), new Square(4)];
shapes.forEach(shape => console.log(shape.calculateArea()));
```
It makes the system highly extensible. If we need to add a new Triangle shape later, we don't have to rewrite the core execution logic,we simply create a new class that adhres to the polymorphic contract.


## Conclusion
In the context of enterprise-level TypeScript applications, the four pillars of OOP act as architectural load-bearing walls. Encapsulation secures our data, Abstraction simplifies communication between modules, Inheritance keeps our code strictly DRY, and Polymorphism ensures our logic remains flexible and open to extension.