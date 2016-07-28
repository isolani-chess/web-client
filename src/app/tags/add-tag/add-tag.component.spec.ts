/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddTagComponent } from './add-tag.component';

describe('Component: AddTag', () => {
  it('should create an instance', () => {
    let component = new AddTagComponent();
    expect(component).toBeTruthy();
  });
});
