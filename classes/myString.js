/**
 * Класс MyString, который имеет следующие методы:
 * - метод reverse, который принимает строку, а возвращает ее в перевернутом виде,
 * - метод ucFirst, который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * - метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
class MyString {
  reverse(string) {
    if (!string) return string;
    return string.split("").reverse().join("");
  }

  ucFirst(string) {
    if (!string) return string;
    const [firstLetter, ...restLetters] = string.trim().split("");
    return [firstLetter.toUpperCase(), ...restLetters].join("");
  }

  ucWords(string) {
    if (!string) return string;
    const words = string.trim().split(" ").filter(value => value);
    return words.map(word => this.ucFirst(word)).join(" ");
  }
}

module.exports = MyString;
