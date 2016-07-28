/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TagsApiService } from './tags-api.service';

describe('TagsApi Service', () => {
  beforeEachProviders(() => [TagsApiService]);

  it('should ...',
      inject([TagsApiService], (service: TagsApiService) => {
    expect(service).toBeTruthy();
  }));
});
