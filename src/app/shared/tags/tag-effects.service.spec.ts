/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TagEffectsService } from './tag-effects.service';

describe('TagEffects Service', () => {
  beforeEachProviders(() => [TagEffectsService]);

  it('should ...',
      inject([TagEffectsService], (service: TagEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
