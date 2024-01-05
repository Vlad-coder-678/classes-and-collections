/**
 * Реализуйте класс Validator, который будет проверять строки на валидность:
 * - метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет,
 * - метод isDomain для проверки домена,
 * - метод isDate для проверки даты,
 * - метод isPhone для проверки телефона.
 * Если строка валидна методы возвращают true, если нет - false.
 */
class Validator {
  isEmail(mail) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail);
  }

  isDomain(domain) {
    return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain);
  }
  
  isDate(date) {
    if (!date) return false;
    const [d, m, y] = date.split(".");
    return new Date(`${y}.${m}.${d}`).toLocaleDateString() === date;
  }

  isPhone(phone) {
    return /^(\+7|8)[- ]?\(?[0-9]{3}\)?[- ]?[0-9]{3}[- ]?[0-9]{2}[- ]?[0-9]{2}$/.test(phone);
  }
}

module.exports = Validator;
