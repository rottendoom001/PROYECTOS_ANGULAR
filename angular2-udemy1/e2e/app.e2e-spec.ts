import { Angular2Udemy1Page } from './app.po';

describe('angular2-udemy1 App', () => {
  let page: Angular2Udemy1Page;

  beforeEach(() => {
    page = new Angular2Udemy1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
