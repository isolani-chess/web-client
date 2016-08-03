/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder } from '@angular/core/testing';
import { resetBaseTestProviders, setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

import { ChessBoardComponent } from './chess-board.component';
import { ChessService } from '../shared';

describe('Component: ChessBoard', () => {
  beforeEach(() => {
    resetBaseTestProviders();
    setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
                        TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
    addProviders([ChessService, TestComponentBuilder]);
  });
  it('should create an instance',
     inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ChessBoardComponent).then((fixture) => {
      expect(fixture.componentInstance).toBeTruthy();
    });
  }));

  it('should render the board',
     inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ChessBoardComponent).then((fixture) => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.cg-board-wrap')).not.toBeNull();
    });
  }));
});
