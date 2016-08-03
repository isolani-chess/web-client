import { Component, Output, EventEmitter } from '@angular/core';
import { ChessService } from '../shared';
import { PgnLineComponent } from '../pgn-line';

@Component({
  selector: 'app-pgn',
  templateUrl: 'pgn.component.html',
  styleUrls: ['pgn.component.scss'],
  directives: [PgnLineComponent]
})
export class PgnComponent {
  @Output() updatePosition: EventEmitter<any> = new EventEmitter();

  constructor(private chessService: ChessService) {}

  onUpdatePosition() {
    this.updatePosition.emit(null);
  }

  getMainline() {
    return this.chessService.chess.currentGame.boardVariations[0];
  }

  getBasePosition() {
    return [];
  }
}
