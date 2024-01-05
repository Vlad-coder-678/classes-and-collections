/**
 * Модифицируйте класс Worker из worker.js следующим образом:
 * - сделайте все его свойства приватными,
 * - для их чтения сделайте методы-геттеры,
 * - для свойств rate и days сделайте методы-сеттеры.
 */
class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  getName() {
    return this.#name;
  }

  getSurname() {
    return this.#surname;
  }

  getRate() {
    return this.#rate;
  }

  setRate(rate) {
    return this.#rate = rate;
  }

  getDays() {
    return this.#days;
  }

  setDays(days) {
    return this.#days = days;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}

module.exports = Worker;
