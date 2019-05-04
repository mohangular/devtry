const { setWorldConstructor } = require("cucumber");

class SimpleReloRate {
  constructor() {
    this.cardCode = 0;
    this.quantity = 0;
    this.rate = 0;
  }

  setCard_code(code) {
    this.cardCode = code;
  }

  rateCalc(qty) {
    if(this.cardCode == 1){
      this.rate = 100 * qty;
    }
    else if(this.cardCode == 2){
      this.rate = 200 * qty;
    }
    else{
      this.rate = 150 * qty;
    }
  }
}

setWorldConstructor(SimpleReloRate);