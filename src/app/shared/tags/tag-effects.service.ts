import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';

import { ADD_TAG,
         REMOVE_TAG,
         CHANGE_TAG_NAME
       } from '../.';

// This is necessary to circumvent a strange bug concerning barrels
// TODO: move to collective import eventually
import { TagsApiService } from '../api/tags-api.service';

@Injectable()
export class TagEffectsService {
  @Effect() addTag$ = this.updates$
    .whenAction(ADD_TAG)
    .do(update => this.tagsApi.store(update.action.payload));

  @Effect() deleteTag$ = this.updates$
    .whenAction(REMOVE_TAG)
    .do(update => this.tagsApi.remove(update.action.payload));

  @Effect() changeTagName$ = this.updates$
    .whenAction(CHANGE_TAG_NAME)
    .do(update => this.tagsApi.changeName(update.action.payload.id, update.action.payload.name));

  constructor(
    private tagsApi: TagsApiService,
    private updates$: StateUpdates<any>
  ) {}
}
