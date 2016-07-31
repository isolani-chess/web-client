import { GameState } from './games/games.reducer';
import { TagState } from './tags/tags.reducer';

export interface AppState {
  games: GameState;
  tags: TagState;
}
