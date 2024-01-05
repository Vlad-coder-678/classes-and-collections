/**
 * Реализуйте класс Student (Студент), который будет наследовать от класса User.
 * Этот класс должен иметь следующие свойства и методы:
 * - name - имя, наследуется от User,
 * - surname - фамилия, наследуется от User,
 * - year - год поступления в вуз.
 * - getFullName() - возвращает имя и фамилию студента через пробел. Наследуется от User.
 * - getCourse() - возвращает текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
 * Текущий год получите самостоятельно.
 */
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname)
    this.year = year;
  }

  getCourse() {
    return new Date().getUTCFullYear() - this.year;
  }
}

module.exports = Student;
