import { Action } from '@ngrx/store';
import { Game } from './game.ts';

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const CHANGE_GAME_OWNER = 'CHANGE_GAME_OWNER';
export const ADD_GAME_TAG = 'ADD_GAME_TAG';
export const REMOVE_GAME_TAG = 'REMOVE_GAME_TAG';

export function game(state: Game[] = [], action: Action): Game[] {
  switch (action.type) {
  case ADD_GAME:
    return state.concat(action.payload);
  case REMOVE_GAME:
    return state.filter((game) => (
      game.id !== action.payload
    ));
  case CHANGE_GAME_OWNER:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        return Object.assign({}, game, {ownerId: action.payload.ownerId});
      }
      return game;
    });
  case ADD_GAME_TAG:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        // only concat if there are already tags, otherwise there will be an undefined in the array
        if (game.tags !== undefined) return Object.assign({}, game, {tags: game.tags.concat(action.payload.tag)});
        return Object.assign({}, game, {tags: [action.payload.tag]});
      }
      return game;
    });
  case REMOVE_GAME_TAG:
    return state.map((game) => {
      if (game.id === action.payload.id) {
        let tags = game.tags.filter((tag) => tag !== action.payload.tag);
        // remove tags property if the last tag was just deleted
        if (tags.length === 0) {
          return removeKeyFromObject(game, 'tags');
        }
        return Object.assign({}, game, {tags: tags});
      }
      return game;
    });
  default:
    return state;
  }
}

/**
 * Returns a new object without the key specified
 */
function removeKeyFromObject(object: {}, removeKey: string): {} {
  return Object.keys(object).reduce((result, key) => {
    if (key !== removeKey) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
