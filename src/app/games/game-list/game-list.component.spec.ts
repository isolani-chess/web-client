/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameListComponent } from './game-list.component';

describe('Component: GameList', () => {
  it('should create an instance', () => {
    let component = new GameListComponent();
    expect(component).toBeTruthy();
  });
});
