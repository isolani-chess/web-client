import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { instrumentStore } from '@ngrx/store-devtools';
import { AppComponent, environment } from './app/';

import { reducers, HorizonService, TagsApiService, TagEffectsService } from './app/shared';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  TagsApiService,
  HorizonService,
  provideStore(reducers),
  runEffects([TagEffectsService])
]);
