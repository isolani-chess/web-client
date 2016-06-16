export class WebChessClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('web-chess-client-app h1')).getText();
  }
}
