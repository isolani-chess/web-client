import { Injectable } from '@angular/core';

import { HorizonService } from '../.';

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

}
