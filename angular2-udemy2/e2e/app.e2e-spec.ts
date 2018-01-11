import { Angular2Udemy2Page } from './app.po';

describe('angular2-udemy2 App', () => {
  let page: Angular2Udemy2Page;

  beforeEach(() => {
    page = new Angular2Udemy2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
