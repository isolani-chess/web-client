/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {
  MOCK_EFFECTS_PROVIDERS,
  MockStateUpdates
} from '@ngrx/effects/testing';

import { TagEffectsService } from './tag-effects.service';
import { TagsApiService } from '../api/tags-api.service';

describe('TagEffects Service', () => {
  const tagsApi = {
    store: () => true,
    remove: () => true,
    changeName: () => true
  };

  beforeEach(() => {
    addProviders([TagEffectsService,
                  { provide: TagsApiService, useValue: tagsApi },
                  MOCK_EFFECTS_PROVIDERS
                 ]);
    spyOn(tagsApi, 'store');
    spyOn(tagsApi, 'remove');
    spyOn(tagsApi, 'changeName');
  });

  it('should be created',
      inject([TagEffectsService], (service: TagEffectsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call store',
  inject([TagEffectsService, MockStateUpdates], (service: TagEffectsService, updates$: MockStateUpdates) => {
    updates$.sendAction({
      type: 'ADD_TAG',
      payload: {
        name: 'Test Tag',
        owner_id: 1
      }
    });
    let wasCalled = false;
    service.addTag$.subscribe(action => {
      expect(tagsApi.store).toHaveBeenCalledWith({
        name: 'Test Tag',
        owner_id: 1
      });
      wasCalled = true;
    });
    if (!wasCalled) {
      fail('The observable didn\'t emit');
    }
  }));

  it('should call remove',
  inject([TagEffectsService, MockStateUpdates], (service: TagEffectsService, updates$: MockStateUpdates) => {
    updates$.sendAction({
      type: 'REMOVE_TAG',
      payload: 1
    });
    let wasCalled = false;
    service.deleteTag$.subscribe(action => {
      expect(tagsApi.remove).toHaveBeenCalledWith(1);
      wasCalled = true;
    });
    if (!wasCalled) {
      fail('The observable didn\'t emit');
    }
  }));

  it('should call changeName',
  inject([TagEffectsService, MockStateUpdates], (service: TagEffectsService, updates$: MockStateUpdates) => {
    updates$.sendAction({
      type: 'CHANGE_TAG_NAME',
      payload: {
        id: 1,
        name: 'Test Tag'
      }
    });
    let wasCalled = false;
    service.changeTagName$.subscribe(action => {
      expect(tagsApi.changeName).toHaveBeenCalledWith(1, 'Test Tag');
      wasCalled = true;
    });
    if (!wasCalled) {
      fail('The observable didn\'t emit');
    }
  }));
});
