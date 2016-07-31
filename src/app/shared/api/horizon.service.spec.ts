/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HorizonService } from './horizon.service';

describe('Horizon Service', () => {
  beforeEach(() => {
    addProviders([HorizonService]);
  });

  it('should be created',
      inject([HorizonService], (service: HorizonService) => {
    expect(service).toBeTruthy();
  }));
});
