const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(type) {
      this.type = !(type === undefined || type === true);
  }
  encrypt(text, key) {
      if (text === undefined || key === undefined) {
          throw new Error('Incorrect arguments!');
      }

      while (!(key.length >= text.length)) {
          key += key;
      }

      let result = '';

      for (let i = 0, j = 0; i < text.length; i++, j++) {

          let textLetter = text[i].toLowerCase().charCodeAt(0);
          let keyLetter = key[j].toLowerCase().charCodeAt(0);

          if (textLetter < 97 || textLetter > 122) {
              result += text[i];
              j--;
              continue;
          }

          if (textLetter + keyLetter - 97 > 122) {
              result += String.fromCharCode(textLetter + keyLetter - 123);
          } else {
              result += String.fromCharCode(textLetter + keyLetter - 97);
          }
      }

      if (this.type) {
          return result.toLocaleUpperCase().split('').reverse().join('');
      } else {
          return result.toLocaleUpperCase();
      }
  }
  decrypt(text, key) {
      if (text === undefined || key === undefined) {
          throw new Error('Incorrect arguments!');
      }

      while (!(key.length >= text.length)) {
          key += key;
      }

      let result = '';

      for (let i = 0, j = 0; i < text.length; i++, j++) {

          let textLetter = text[i].toLowerCase().charCodeAt(0);
          let keyLetter = key[j].toLowerCase().charCodeAt(0);

          if (textLetter < 97 || textLetter > 122) {
              result += text[i];
              j--;
              continue;
          }

          if ((textLetter - (keyLetter - 97)) < 97) {
              result += String.fromCharCode(123 - (97 - (textLetter - (keyLetter - 97))));
          } else {
              result += String.fromCharCode(textLetter - (keyLetter - 97));
          }
      }

      if (this.type) {
          return result.toLocaleUpperCase().split('').reverse().join('');
      } else {
          return result.toLocaleUpperCase();
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
