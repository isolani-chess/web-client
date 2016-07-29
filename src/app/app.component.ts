import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Observable } from 'rxjs/Rx';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

import { TagListComponent } from './tags/tag-list';
import { AddTagComponent } from './tags/add-tag';
import { GameListComponent } from './games/game-list';
import { AddGameComponent } from './games/add-game';
import { AppState,
         TagsApiService,
         TagEffectsService,
         HorizonService,
         REPLACE_TAGS,
         ADD_TAG,
         REMOVE_TAG,
         CHANGE_TAG_NAME,
         ADD_GAME
       } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    StoreLogMonitorComponent,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    TagListComponent,
    AddTagComponent,
    GameListComponent,
    AddGameComponent
  ],
  providers: [
    MdIconRegistry
  ]
})
export class AppComponent {
  tags$: Observable<any>;
  games$: Observable<any>;

  constructor(private store: Store<AppState>,
              private tagsApi: TagsApiService) {
    this.tags$ = store.select('tags');
    this.games$ = store.select('games');
    tagsApi.tags.watch().subscribe((tags) => {
      store.dispatch({
        type: REPLACE_TAGS,
        payload: tags
      });
    })
  }

  onAddTag(tagName) {
    this.store.dispatch({
      type: ADD_TAG,
      payload: {
        owner_id: 1,
        name: tagName
      }
    });
  }

  onAddGame() {
    this.store.dispatch({
      type: ADD_GAME,
      payload: {
        owner_id: 1
      }
    });
  }

  onDeleteTag(tag) {
    this.store.dispatch({
      type: REMOVE_TAG,
      payload: tag.id
    });
  }

  onChangeTagName(change) {
    this.store.dispatch({
      type: CHANGE_TAG_NAME,
      payload: change
    });
  }
}
