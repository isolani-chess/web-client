import { Action } from '@ngrx/store';
import { Tag } from './tag.ts';

export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const CHANGE_TAG_OWNER = 'CHANGE_TAG_OWNER';
export const CHANGE_TAG_NAME = 'CHANGE_TAG_NAME';

export function tag(state: Tag[] = [], action: Action) {
  switch (action.type) {
  case ADD_TAG:
    return state.concat(action.payload);
  case REMOVE_TAG:
    return state.filter((tag) => (
        tag.id !== action.payload
    ));
  case CHANGE_TAG_OWNER:
    return state.map((tag) => {
      if (tag.id === action.payload.id) {
        return Object.assign({}, tag, {ownerId: action.payload.ownerId});
      }
      return tag;
    });
  case CHANGE_TAG_NAME:
    return state.map((tag) => {
      if (tag.id === action.payload.id) {
        return Object.assign({}, tag, {name: action.payload.name});
      }
      return tag;
    });
  default:
    return state;
  }
}
