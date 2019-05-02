import { browser } from 'protractor';
import { By } from 'selenium-webdriver';

class Home {
    get () {
        return browser.get('/');
    }

    getUser() {
        return 'user'; // TODO: Find and return real user
    }

    getTitle() {
        return browser.driver.findElement(By.tagName('h1'));
    }

    getIcon() {
        return browser.driver.findElement(By.tagName('img'));
    }

     getCardsDiv() {
        return browser.driver.findElement(By.id('cards'));
    }
}

export const home = new Home();
