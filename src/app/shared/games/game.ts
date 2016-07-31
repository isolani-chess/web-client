import { JCFGame } from '../../chess/shared';

export interface Game {
  id?: number;
  localId?: number;
  ownerId: number;
  unsavedChanges: boolean;
  tags?: number[];
  jcf?: JCFGame;
}
