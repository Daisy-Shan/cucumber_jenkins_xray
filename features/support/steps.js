var { Given, When, Then } = require('cucumber')
const {expect} = require('chai')

Given(/^a variable set to (\d+)$/, async function (arg1) {

    this.setTo(arg1)
});

When(/^I increment the variable by (\d+)$/, async function (arg1) {

    this.incrementBy(arg1)
});

Then(/^the variable should contain (\d+)$/, async function (arg1) {

    expect(this.variable).to.eql(arg1)
});