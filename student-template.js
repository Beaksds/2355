"use strict";

// Практическая работа №6
// Тема: основы ООП в JavaScript.
// Заполните только участки TODO.
// Имена классов, функций, методов и module.exports не изменяйте.

// 1. Класс Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}

// 2. Класс Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }

  add(amount) {
    if (amount > 0) {
      this.quantity += amount;
    }
    return this.quantity;
  }
}

// 3. Класс Student
class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  getAverage() {
    if (this.grades.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }

  addGrade(grade) {
    this.grades.push(grade);
    return this.grades.length;
  }
}

// 4. Класс BankAccount
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
    return this.balance;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
    return this.balance;
  }
}

// 5. Наследование
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}

class StudentProfile extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }

  getInfo() {
    return `${super.getInfo()}, группа ${this.group}`;
  }
}

// 6. "Класс" без синтаксиса class
function LegacyUser(name, age) {
  this.name = name;
  this.age = age;
}

LegacyUser.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

module.exports = {
  Rectangle,
  Product,
  Student,
  BankAccount,
  Person,
  StudentProfile,
  LegacyUser,
};