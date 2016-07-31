import { Injectable } from '@angular/core';
const Horizon = require('@horizon/client/lib');

@Injectable()
export class HorizonService {
  public hz;
  constructor() {
    this.hz = new Horizon({
      host: 'localhost:8181'
    });
  }

}
