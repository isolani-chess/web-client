import { Injectable } from '@angular/core';
declare var Horizon: any;

@Injectable()
export class HorizonService {
  public hz;
  constructor() {
    this.hz = new Horizon({
      host: 'localhost:8181'
    });
  }

}
