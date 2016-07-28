import { combineReducers } from '@ngrx/store';

import { games } from './.';
import { tags } from './tags/tags.reducer';

//export const reducers = combineReducers([games, tags]);
export const reducers = {
  tags: tags,
  games: games
};
