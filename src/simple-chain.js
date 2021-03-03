const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.chain.push(value+'');
//    console.log(this.chain);
    return this;
  },
  removeLink(position) {
    //if (this.getLength() < position)
    //console.log(this.chain);
    this.chain.splice(position-1, 1);
    //console.log(this.chain);
    return this;
    //throw new CustomError('Not implemented');
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return '( '+this.chain.join(' )~~( ')+' )';
  }
};

module.exports = chainMaker;
