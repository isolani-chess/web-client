import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PgnMoveComponent } from '../pgn-move';

@Component({
  selector: 'app-pgn-line',
  templateUrl: 'pgn-line.component.html',
  styleUrls: ['pgn-line.component.scss'],
  directives: [PgnMoveComponent, PgnLineComponent]
})
export class PgnLineComponent {
  @Input() line;

  @Input() basePosition;

  @Output() updatePosition: EventEmitter<any> = new EventEmitter();

  onUpdatePosition() {
    this.updatePosition.emit(null);
  }

  getMoves() {
    return this.line.moveHistory;
  }
}
