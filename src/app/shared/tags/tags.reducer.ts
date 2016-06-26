import { Action } from '@ngrx/store';
import { Tag } from './tag.ts';

export interface TagState {
  isFetching: boolean;
  tags: Tag[];
}

export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const CHANGE_TAG_OWNER = 'CHANGE_TAG_OWNER';
export const CHANGE_TAG_NAME = 'CHANGE_TAG_NAME';

export function tags(state: TagState = {
                        isFetching: false,
                        tags: []
                      },
                      action: Action): TagState {
  switch (action.type) {
  case ADD_TAG:
    return Object.assign({}, state, {
      tags: tagList(state.tags, action)
    });
  case REMOVE_TAG:
    return Object.assign({}, state, {
      tags: tagList(state.tags, action)
    });
  case CHANGE_TAG_OWNER:
    return Object.assign({}, state, {
      tags: tagList(state.tags, action)
    });
  case CHANGE_TAG_NAME:
    return Object.assign({}, state, {
      tags: tagList(state.tags, action)
    });
  default:
    return state;
  }
}

function tagList(state: Tag[], action: Action): Tag[] {
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
        return tagDetail(tag, {
          type: action.type,
          payload: action.payload.ownerId
        });
      }
      return tag;
    });
  case CHANGE_TAG_NAME:
    return state.map((tag) => {
      if (tag.id === action.payload.id) {
        return tagDetail(tag, {
          type: action.type,
          payload: action.payload.name
        });
      }
      return tag;
    });
  default:
    return state;
  }
}

function tagDetail(state: Tag, action: Action): Tag {
  switch (action.type) {
  case CHANGE_TAG_OWNER:
    return Object.assign({}, state, {ownerId: action.payload});
  case CHANGE_TAG_NAME:
    return Object.assign({}, state, {name: action.payload});
  default:
    return state;
  }
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
