import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getHeader() {
    return element(by.tagName('bc-header'));
  }
}
