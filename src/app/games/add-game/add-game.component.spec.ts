/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddGameComponent } from './add-game.component';

describe('Component: AddGame', () => {
  it('should create an instance', () => {
    let component = new AddGameComponent();
    expect(component).toBeTruthy();
  });
});
