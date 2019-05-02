import { browser, promise } from 'protractor';
import { CallbackStepDefinition, Given, Then, When } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { home } from './home.page';
import { protractor } from 'protractor/built/ptor';

chai.use(chaiAsPromised);
const expect = chai.expect;

Given('I am a user', () => {
    expect(home.getUser()).to.equal('user');
});

When('I visit the home page', (callback: CallbackStepDefinition) => {
    home.get().then(callback);
});

Then('I see the home page', () => {
    browser.getCurrentUrl().then((url) => {
        expect(url).to.equal(browser.baseUrl + '/');
    });
});

Then('I see the title', () => {
    expect(home.getTitle().getText()).to.eventually.equal('Welcome To New Angular App!');
});

Then('I see the icon', () => {
    expect(home.getIcon().getAttribute('src')).to.exist;
});

Then('I see hyperlinks on the help cards', () => {
    const tests = [];
    home.getCardsDiv().then((div) => {
        div.findElements(protractor.by.tagName('mat-card')).then((cards) => {
            tests.push(expect(cards[0].findElement(protractor.by.tagName('a')).getAttribute('href')).to.eventually.equal('https://angular.io/tutorial'));
            tests.push(expect(cards[1].findElement(protractor.by.tagName('a')).getAttribute('href')).to.eventually.equal('https://angular.io/cli'));
            tests.push(expect(cards[2].findElement(protractor.by.tagName('a')).getAttribute('href')).to.eventually.equal('https://blog.angular.io/'));
        });
    });
    return promise.all(tests);
});

Then('I see the help cards displayed horizonally', () => {
    // First set browser to desktop width
    browser.driver.manage().window().setSize(1400, 900).then(() => {
        expect(home.getCardsDiv().getCssValue('flex-direction')).to.eventually.equal('row');
    });
});

Then('I see the help cards displayed vertically', () => {
    // First set browser to mobile width
    browser.driver.manage().window().setSize(500, 900).then(() => {
        expect(home.getCardsDiv().getCssValue('flex-direction')).to.eventually.equal('column');
    });
});
