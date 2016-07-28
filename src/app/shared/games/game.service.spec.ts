/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GameService } from './game.service';

describe('Game Service', () => {
  beforeEachProviders(() => [GameService]);

  it('should ...',
      inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
