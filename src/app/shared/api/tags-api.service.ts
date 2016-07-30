import { Injectable } from '@angular/core';

// This is necessary to circumvent a strange bug concerning barrels
// TODO: move to collective import eventually
import { HorizonService } from '../api/horizon.service';

@Injectable()
export class TagsApiService {
  public tags;

  constructor(private horizon: HorizonService) {
    this.tags = horizon.hz('tags');
  }

  store(tag: any) {
    return this.tags.store(Object.assign({}, tag, {
      createdAt: new Date()
    }));
  }

  remove(id: any) {
    return this.tags.remove(id);
  }

  changeName(id: any, name: string) {
    return this.tags.update({
      id: id,
      name: name
    });
  }
}
