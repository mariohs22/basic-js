const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direction = true;
  #keys = [];

  constructor (direction = true){
    this.direction = direction;
  }

  createKeys(key, decrypt = false){
    this.#keys = [];
    for (let i = 0; i < key.length; i++) {
      let c = key.charCodeAt(i);
      if ((65 <= c && c <= 90) || (97 <= c && c <= 122)){
        this.#keys.push((c - 65) % 32);
      }
    }
    if (decrypt === true){
      for (var i = 0; i < this.#keys.length; i++)
      this.#keys[i] = (26 - this.#keys[i]) % 26;
    }
  }

  crypt(str){
    let c;
    let r = [];
    for (let i = 0, j = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      if (65 <= c && c <= 90){
        r.push(
          String.fromCharCode((c - 65 + this.#keys[j % this.#keys.length]) % 26 + 65)
        );
        j++;
      }else if (97 <= c && c <= 122){
        r.push(
          String.fromCharCode((c - 97 + this.#keys[j % this.#keys.length]) % 26 + 97).toUpperCase()
        );
        j++;
      }else{
        r.push(str[i]);
      }
    }
    return r;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Error');
    this.createKeys(key);
    return (this.direction)? this.crypt(str).join('') : this.crypt(str).reverse().join('');
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Error');
    this.createKeys(key, true);
    return (this.direction)? this.crypt(str).join('') : this.crypt(str).reverse().join('');
  }

}

module.exports = VigenereCipheringMachine;
