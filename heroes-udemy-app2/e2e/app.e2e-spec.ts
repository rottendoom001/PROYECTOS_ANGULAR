import { HeroesUdemyApp2Page } from './app.po';

describe('heroes-udemy-app2 App', () => {
  let page: HeroesUdemyApp2Page;

  beforeEach(() => {
    page = new HeroesUdemyApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
