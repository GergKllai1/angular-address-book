import { browser, by, element } from 'protractor';
import { readElementValue } from '@angular/core/src/render3/util';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getField(name) {
    return element(by.name(name));
  }

  getSubmitButton() {
    return element(by.buttonText('Submit'));
  }

  cardCount() {
    return element.all(by.css('.card')).count();
  }

}
