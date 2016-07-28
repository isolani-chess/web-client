import { Action } from '@ngrx/store';
import { Game } from './game.ts';

export interface GameState {
  isFetching: boolean;
  games: Game[];
}

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const CHANGE_GAME_OWNER = 'CHANGE_GAME_OWNER';
export const ADD_GAME_TAG = 'ADD_GAME_TAG';
export const REMOVE_GAME_TAG = 'REMOVE_GAME_TAG';
export const FETCH_GAMES = 'FETCH_GAMES';
export const LOAD_GAMES = 'LOAD_GAMES';
export const SAVE_GAME_SUCCESS = 'SAVE_GAME_SUCCESS';

export function games(state: GameState = {
                        isFetching: false,
                        games: []
                      },
                      action: Action): GameState {
  switch (action.type) {
  case FETCH_GAMES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case LOAD_GAMES:
    return Object.assign({}, state, {
      isFetching: false,
      games: gameList(state.games, action)
    })
  case ADD_GAME:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  case REMOVE_GAME:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  case CHANGE_GAME_OWNER:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  case ADD_GAME_TAG:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  case REMOVE_GAME_TAG:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  case SAVE_GAME_SUCCESS:
    return Object.assign({}, state, {
      games: gameList(state.games, action)
    });
  default:
    return state;
  }
}

function gameList(state: Game[], action: Action): Game[] {
  switch (action.type) {
  case LOAD_GAMES:
    return state.concat(action.payload);
  case ADD_GAME:
    return state.concat(action.payload);
  case REMOVE_GAME:
    return state.filter((game) => (
      game.id !== action.payload
    ));
  case CHANGE_GAME_OWNER:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        return gameDetail(game, {
          type: action.type,
          payload: action.payload.ownerId
        });
      }
      return game;
    });
  case ADD_GAME_TAG:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        return gameDetail(game, {
          type: action.type,
          payload: action.payload.tag
        });
      }
      return game;
    });
  case REMOVE_GAME_TAG:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        return gameDetail(game, {
          type: action.type,
          payload: action.payload.tag
        });
      }
      return game;
    });
  case SAVE_GAME_SUCCESS:
    return state.map((game) => {
      if (game.id === action.payload.id
       || game.localId === action.payload.localId) {
        return gameDetail(game, action);
      }
      return game;
    });
  default:
    return state;
  }
}

function gameDetail(state: Game, action: Action): Game {
  switch (action.type) {
  case CHANGE_GAME_OWNER:
    state = Object.assign({}, state, {ownerId: action.payload});
    break;
  case ADD_GAME_TAG:
    // only concat if there are already tags, otherwise there will be an undefined in the array
    if (state.tags !== undefined) {
      state = Object.assign({}, state, {tags: state.tags.concat(action.payload)});
    } else {
      state = Object.assign({}, state, {tags: [action.payload]});
    }
    break;
  case REMOVE_GAME_TAG:
    let tags = state.tags.filter((tag) => tag !== action.payload);
    // remove tags property if the last tag was just deleted
    if (tags.length === 0) {
      state = removeKeyFromObject(state, 'tags');
    } else {
      state = Object.assign({}, state, {tags: tags});
    }
    break;
  case SAVE_GAME_SUCCESS:
    if (action.payload.setId) {
      state = Object.assign({}, state, {id: action.payload.setId});
    }
    return Object.assign({}, state, {unsavedChanges: false})
  default:
    return state;
  }
  // if no action matched, function has returned already, so if this is reached, some action was successfully applied
  return Object.assign({}, state, {unsavedChanges: true});
}

/**
 * Returns a new object without the key specified
 */
function removeKeyFromObject(object: any, removeKey: string): any {
  return Object.keys(object).reduce((result, key) => {
    if (key !== removeKey) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
