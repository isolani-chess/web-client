import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebChessClientAppComponent } from '../app/web-chess-client.component';

beforeEachProviders(() => [WebChessClientAppComponent]);

describe('App: WebChessClient', () => {
  it('should create the app',
      inject([WebChessClientAppComponent], (app: WebChessClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'web-chess-client works!\'',
      inject([WebChessClientAppComponent], (app: WebChessClientAppComponent) => {
    expect(app.title).toEqual('web-chess-client works!');
  }));
});
