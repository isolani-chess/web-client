import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-add-tag',
  templateUrl: 'add-tag.component.html',
  styleUrls: ['add-tag.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ]
})
export class AddTagComponent implements OnInit {
  @Output() addTag = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
