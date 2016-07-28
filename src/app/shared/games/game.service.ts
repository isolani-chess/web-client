import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'chess-es6.js/game';
import { ChessService } from '../../chess/shared';
import { ADD_GAME, AppState } from '../';

@Injectable()
export class GameService {
  constructor(private chessService: ChessService,
              private store: Store<AppState>) {}

  getGame(index: number): Game {
    return this.chessService.chess.games[index];
  }

  addGame(ownerId): number {
    this.chessService.chess.addGame();
    this.store.dispatch({
      type: ADD_GAME,
      payload: {
        ownerId: ownerId
      }
    });
    // index of the new game:
    return this.chessService.chess.games.length - 1;
  }
}
