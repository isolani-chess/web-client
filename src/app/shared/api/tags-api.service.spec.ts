/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TagsApiService } from './tags-api.service';
import { HorizonService } from './horizon.service';

describe('TagsApi Service', () => {
  const horizonTags = {
    store: () => true,
    remove: () => true,
    update: () => true
  };
  const horizon = {
    hz: () => horizonTags
  };

  beforeEach(() => {
    addProviders([TagsApiService,
                  { provide: HorizonService, useValue: horizon }
                 ]);
    spyOn(horizonTags, 'store');
    spyOn(horizonTags, 'remove');
    spyOn(horizonTags, 'update');
  });

  it('should be created',
      inject([TagsApiService], (service: TagsApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should expose tags', inject([TagsApiService], (service: TagsApiService) => {
    expect(service.tags).toBe(horizonTags);
  }));

  it('should call store', inject([TagsApiService], (service: TagsApiService) => {
    service.store({
      name: 'Test tag',
      owner_id: 1
    });
    expect(horizonTags.store).toHaveBeenCalled();
    expect((<jasmine.Spy>horizonTags.store).calls.argsFor(0)[0].name).toEqual('Test tag');
    expect((<jasmine.Spy>horizonTags.store).calls.argsFor(0)[0].owner_id).toEqual(1);
  }));

  it('should insert creation date', inject([TagsApiService], (service: TagsApiService) => {
    service.store({
      name: 'Test tag',
      owner_id: 1
    });
    expect((<jasmine.Spy>horizonTags.store).calls.argsFor(0)[0].created_at).not.toBeUndefined();
  }));

  it('should call remove', inject([TagsApiService], (service: TagsApiService) => {
    service.remove(1);
    expect(horizonTags.remove).toHaveBeenCalledWith(1);
  }));

  it('should call changeName', inject([TagsApiService], (service: TagsApiService) => {
    service.changeName(1, 'new name');
    expect(horizonTags.update).toHaveBeenCalledWith({id: 1, name: 'new name'});
  }));
});
