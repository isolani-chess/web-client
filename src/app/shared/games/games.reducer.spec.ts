/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { games,
         ADD_GAME,
         REMOVE_GAME,
         CHANGE_GAME_OWNER,
         ADD_GAME_TAG,
         REMOVE_GAME_TAG,
         FETCH_GAMES,
         LOAD_GAMES,
         SAVE_GAME_SUCCESS,
         GameState
       } from './games.reducer';
import { Game } from './game.ts';

describe('games reducer', () => {
  const NON_EXISTENT = {
    type: 'NON_EXISTENT'
  };

  const original: GameState = {
    isFetching: false,
    games: [{
      id: 1,
      ownerId: 2,
      unsavedChanges: false
    }]
  };

  it('should return the default state', () => {
    expect(games(undefined, NON_EXISTENT)).toEqual({
      isFetching: false,
      games: []
    });
  });

  it('should return the same state on invalid action', () => {
    expect(games(original, NON_EXISTENT)).toEqual(original);
  });

  it('should set isFetching to true', () => {
    const state: GameState = {
      isFetching: false,
      games: []
    };
    const expected: GameState = {
      isFetching: true,
      games: []
    };
    expect(games(state, {
      type: FETCH_GAMES
    })).toEqual(expected);
  });

  it('should load games', () => {
    const state: GameState = {
      isFetching: true,
      games: []
    };
    const expected: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 4,
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 9,
          unsavedChanges: false
        }
      ]
    };
    expect(games(state, {
      type: LOAD_GAMES,
      payload: [
        {
          id: 1,
          ownerId: 4,
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 9,
          unsavedChanges: false
        }
      ]
    })).toEqual(expected);
  });

  it('should add a game', () => {
    const newGame: Game = {
      id: 2,
      ownerId: 7,
      unsavedChanges: false
    };
    const expected: GameState = {
      isFetching: false,
      games: [{
        id: 1,
        ownerId: 2,
        unsavedChanges: false
      },
      {
        id: 2,
        ownerId: 7,
        unsavedChanges: false
      }]
    };
    expect(games(original, {
      type: ADD_GAME,
      payload: newGame
    })).toEqual(expected);
  });

  it('should remove a game', () => {
    expect(games(original, {
      type: REMOVE_GAME,
      payload: 1
    })).toEqual({
      isFetching: false,
      games: []
    });
  });

  it('should change the owner of a game', () => {
    const state: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          unsavedChanges: false
        }
      ]
    };
    const expected: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 5,
          unsavedChanges: true
        },
        {
          id: 2,
          ownerId: 5,
          unsavedChanges: false
        }
      ]
    };
    expect(games(state, {
      type: CHANGE_GAME_OWNER,
      payload: {id: 1, ownerId: 5}
    })).toEqual(expected);
  });
  it('should add tags', () => {
    const state: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          unsavedChanges: false
        }
      ]
    };
    const expected: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          tags: [12],
          unsavedChanges: true
        }
      ]
    };
    expect(games(state, {
      type: ADD_GAME_TAG,
      payload: {
        id: 2,
        tag: 12
      }
    })).toEqual(expected);
    const state2: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          tags: [11, 19],
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          unsavedChanges: false
        }
      ]
    };
    const expected2: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          tags: [11, 19, 2],
          unsavedChanges: true
        },
        {
          id: 2,
          ownerId: 5,
          unsavedChanges: false
        }
      ]
    };
    expect(games(state2, {
      type: ADD_GAME_TAG,
      payload: {
        id: 1,
        tag: 2
      }
    })).toEqual(expected2);
  });
  it('should remove tags', () => {
    const state: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          tags: [12],
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          tags: [12, 13],
          unsavedChanges: false
        }
      ]
    };
    const expectedFirst: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          tags: [12],
          unsavedChanges: false
        },
        {
          id: 2,
          ownerId: 5,
          tags: [13],
          unsavedChanges: true
        }
      ]
    };
    const expectedSecond: GameState = {
      isFetching: false,
      games: [
        {
          id: 1,
          ownerId: 2,
          unsavedChanges: true
        },
        {
          id: 2,
          ownerId: 5,
          tags: [13],
          unsavedChanges: true
        }
      ]
    };
    const newState = games(state, {
      type: REMOVE_GAME_TAG,
      payload: {
        id: 2,
        tag: 12
      }
    });
    expect(newState).toEqual(expectedFirst);

    expect(games(newState, {
      type: REMOVE_GAME_TAG,
      payload: {
        id: 1,
        tag: 12
      }
    })).toEqual(expectedSecond);
  });

  it('should save a game', () => {
    const state: GameState = {
      isFetching: false,
      games: [
        {
          localId: 1,
          unsavedChanges: true,
          ownerId: 19
        }
      ]
    };
    const expected: GameState = {
      isFetching: false,
      games: [
        {
          localId: 1,
          id: 1,
          unsavedChanges: false,
          ownerId: 19
        }
      ]
    };
    expect(games(state, {
      type: SAVE_GAME_SUCCESS,
      payload: {
        localId: 1,
        setId: 1
      }
    })).toEqual(expected);
  });
});
