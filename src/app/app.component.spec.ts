/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { reducers, HorizonService, TagsApiService, TagEffectsService } from './shared';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';

describe('App: WebChessClient', () => {
  const tagsApi = {
    tags: {
      watch: () => Observable.create(subscriber => {})
    },
    store: () => true,
    remove: () => true,
    update: () => true
  };
  beforeEach(() => {
    addProviders([
      AppComponent,
      { provide: TagsApiService, useValue: tagsApi },
      provideStore(reducers)
    ]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
