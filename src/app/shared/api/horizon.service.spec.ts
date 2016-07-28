/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HorizonService } from './horizon.service';

describe('Horizon Service', () => {
  beforeEachProviders(() => [HorizonService]);

  it('should ...',
      inject([HorizonService], (service: HorizonService) => {
    expect(service).toBeTruthy();
  }));
});
