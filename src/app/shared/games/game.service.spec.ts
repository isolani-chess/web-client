/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { ChessService } from '../../chess/shared/chess.service';

describe('Game Service', () => {
  beforeEach(() => {
    addProviders([GameService,
                  ChessService
                 ]);
  });

  xit('should ...',
      inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
