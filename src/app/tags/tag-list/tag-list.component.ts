import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-tag-list',
  templateUrl: 'tag-list.component.html',
  styleUrls: ['tag-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input() tags: any;
}
