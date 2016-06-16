import { WebChessClientPage } from './app.po';

describe('web-chess-client App', function() {
  let page: WebChessClientPage;

  beforeEach(() => {
    page = new WebChessClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
