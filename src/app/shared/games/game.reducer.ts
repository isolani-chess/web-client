import { Action } from '@ngrx/store';
import { Game } from './game.ts';

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const CHANGE_GAME_OWNER = 'CHANGE_GAME_OWNER';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

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
  default:
    return state;
  }
}
