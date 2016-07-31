import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'app-add-game',
  templateUrl: 'add-game.component.html',
  styleUrls: ['add-game.component.scss'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ]
})
export class AddGameComponent implements OnInit {
  @Output() addGame = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
