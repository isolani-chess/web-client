import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Color } from 'chess-es6.js/color';
import { MoveContext } from 'chess-es6.js/move_context';
import { ChessService } from '../shared';

@Component({
  selector: 'app-pgn-move',
  templateUrl: 'pgn-move.component.html',
  styleUrls: ['pgn-move.component.scss']
})
export class PgnMoveComponent {
  @Input() moveContext: MoveContext;

  @Input() positionIndex;

  @Output() updatePosition: EventEmitter<any> = new EventEmitter();

  constructor(private chessService: ChessService) {
  }

  getSAN(): string {
    return this.moveContext.move.san;
  }

  getMoveNumber(): number {
    return this.moveContext.moveNumber;
  }

  getMoveNumberString(): string {
    if (this.moveContext.turn === Color.WHITE) {
      return this.getMoveNumber() + '. ';
    }

    return '';
  }

  goToPosition() {
    this.chessService.chess.currentGame.goToPosition(this.positionIndex);
    this.updatePosition.emit(null);
  }
}
