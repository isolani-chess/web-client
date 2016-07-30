import { combineReducers } from '@ngrx/store';

import { games } from './games/games.reducer';
import { tags } from './tags/tags.reducer';

// combineReducers doesn't work for some reason, it creates an objejct with '0' and '1' as keys
// instead of 'games' and 'tags'
// export const reducers = combineReducers([games, tags]);
export const reducers = {
  games: games,
  tags: tags
};
