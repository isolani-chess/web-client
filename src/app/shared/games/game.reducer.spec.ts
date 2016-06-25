/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { game,
         ADD_GAME,
         REMOVE_GAME,
         CHANGE_GAME_OWNER
       } from './game.reducer';
import { Game } from './game.ts';

describe('game reducer', () => {
  const NON_EXISTENT = {
    type: 'NON_EXISTENT'
  };
  it('should return the default state', () => {
    expect(game(undefined, NON_EXISTENT)).toEqual([]);
  });

  it('should return the same state on invalid action', () => {
    const state: Game[] = [{
      id: 1,
      ownerId: 2
    }];
    expect(game(state, NON_EXISTENT)).toEqual(state);
  });

  it('should add a game', () => {
    const state: Game[] = [{
      id: 1,
      ownerId: 2
    }];
    const newGame: Game = {
        id: 2,
        ownerId: 7
    };
    expect(game(state, {
      type: ADD_GAME,
      payload: newGame
    })).toEqual(state.concat(newGame));
  });

  it('should remove a game', () => {
    const state: Game[] = [{
      id: 1,
      ownerId: 2
    }];
    expect(game(state, {
      type: REMOVE_GAME,
      payload: 1
    })).toEqual([]);
  });

  it('should change the owner of a game', () => {
    const state: Game[] = [
      {
        id: 1,
        ownerId: 2
      },
      {
        id: 2,
        ownerId: 5
      }
    ];
    const expected: Game[] = [
      {
        id: 1,
        ownerId: 5
      },
      {
        id: 2,
        ownerId: 5
      }
    ];
    expect(game(state, {
      type: CHANGE_GAME_OWNER,
      payload: {id: 1, ownerId: 5}
    })).toEqual(expected);
  });
});
