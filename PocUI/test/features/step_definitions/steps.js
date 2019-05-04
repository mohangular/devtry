const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("a card code set to {int}", function(code) {
  this.setCard_code(code);
});

When("I get the quantity as {int}", function(qty) {
  this.rateCalc(qty);
});

Then("the rate value should be {int}", function(rateValue) {
  expect(this.rate).to.eql(rateValue);
});