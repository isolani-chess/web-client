import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';

import { ChessBoardComponent } from '../chess-board';
import { PgnComponent } from '../pgn';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss'],
  directives: [
    MdIcon,
    MD_BUTTON_DIRECTIVES,
    ChessBoardComponent,
    PgnComponent
  ]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
