import { AppPage } from './app.po';

describe('testseed App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render bc-header', () => {
    page.navigateTo();
    expect(page.getHeader()).not.toBeNull();
  });
});
