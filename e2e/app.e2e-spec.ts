import { CsssPage } from './app.po';

describe('csss App', function() {
  let page: CsssPage;

  beforeEach(() => {
    page = new CsssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
