/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TagItemComponent } from './tag-item.component';

describe('Component: TagItem', () => {
  it('should create an instance', () => {
    let component = new TagItemComponent();
    expect(component).toBeTruthy();
  });
});
