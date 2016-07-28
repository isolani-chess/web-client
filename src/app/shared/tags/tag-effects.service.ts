import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';

import { TagsApiService,
         ADD_TAG
       } from '../.';

@Injectable()
export class TagEffectsService {
  constructor(
    private tagsApi: TagsApiService,
    private updates$: StateUpdates<any>
  ) {}

  @Effect() addTag$ = this.updates$
    .whenAction(ADD_TAG)
    .do(update => this.tagsApi.store(update.action.payload));
}
