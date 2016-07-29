import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-tag-item',
  templateUrl: 'tag-item.component.html',
  styleUrls: ['tag-item.component.css'],
  directives: [
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagItemComponent {
  @Input() tag: any;
  @Output() changeTagName = new EventEmitter();
  @Output() deleteTag = new EventEmitter();
  @Output() showTagInfo = new EventEmitter();

  editMode = false;

  onDoneEditing(id, name) {
    this.editMode = false;
    this.changeTagName.emit({
      id: id,
      name: name
    });
  }
}
