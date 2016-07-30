import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {
  @Input() games: any;
}
