import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TagItemComponent } from '../tag-item';

@Component({
  selector: 'app-tag-list',
  templateUrl: 'tag-list.component.html',
  styleUrls: ['tag-list.component.scss'],
  directives: [
    MD_LIST_DIRECTIVES,
    TagItemComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input() tags: any;
  @Output() changeTagName = new EventEmitter();
  @Output() deleteTag = new EventEmitter();
}
