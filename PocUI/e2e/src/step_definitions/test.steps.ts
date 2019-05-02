// *** Duplicating Home just for test purposes ***
import { CallbackStepDefinition, Given, Then, When } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { home } from './home.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

Given('I am a user 2', () => {
    expect(home.getUser()).to.equal('user');
});

When('I visit the home page 2', (callback: CallbackStepDefinition) => {
    home.get().then(callback);
});

Then('I see the title 2', () => {
    return expect(home.getTitle().getText()).to.eventually.equal('Welcome To New Angular App!');
});
