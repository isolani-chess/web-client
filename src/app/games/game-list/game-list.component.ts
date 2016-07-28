import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Game } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {
  @Input() games: any;
}
