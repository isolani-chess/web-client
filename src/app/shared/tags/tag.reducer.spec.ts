/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {
  tag,
  ADD_TAG,
  REMOVE_TAG,
  CHANGE_TAG_OWNER,
  CHANGE_TAG_NAME
} from './tag.reducer';
import { Tag } from './tag';

describe('Tag reducer', () => {
  const NON_EXISTENT = {
    type: 'NON_EXISTENT'
  };
  it('should return the default state', () => {
    expect(tag(undefined, NON_EXISTENT)).toEqual([]);
  });

  it('should return the same state on invalid action', () => {
    const state: Tag[] = [{
      id: 1,
      name: 'my test tag',
      ownerId: 2
    }];
    expect(tag(state, NON_EXISTENT)).toEqual(state);
  });

  it('should add a tag', () => {
    const state: Tag[] = [{
      id: 1,
      name: 'my test tag',
      ownerId: 2
    }];
    const newTag: Tag = {
        id: 2,
        name: 'my second test tag',
        ownerId: 7
    };
    expect(tag(state, {
      type: ADD_TAG,
      payload: newTag
    })).toEqual(state.concat(newTag));
  });

  it('should remove a tag', () => {
    const state: Tag[] = [{
      id: 1,
      name: 'my test tag',
      ownerId: 2
    }];
    expect(tag(state, {
      type: REMOVE_TAG,
      payload: 1
    })).toEqual([]);
  });

  it('should change the owner of a tag', () => {
    const state: Tag[] = [
      {
        id: 1,
        name: 'my test tag',
        ownerId: 2
      },
      {
        id: 2,
        name: 'my second test tag',
        ownerId: 5
      }
    ];
    const expected: Tag[] = [
      {
        id: 1,
        name: 'my test tag',
        ownerId: 5
      },
      {
        id: 2,
        name: 'my second test tag',
        ownerId: 5
      }
    ];
    expect(tag(state, {
      type: CHANGE_TAG_OWNER,
      payload: {id: 1, ownerId: 5}
    })).toEqual(expected);
  });

  it('should change the name of a tag', () => {
    const state: Tag[] = [
      {
        id: 1,
        name: 'my test tag',
        ownerId: 2
      },
      {
        id: 2,
        name: 'my second test tag',
        ownerId: 5
      }
    ];
    const expected: Tag[] = [
      {
        id: 1,
        name: 'my test tag',
        ownerId: 2
      },
      {
        id: 2,
        name: 'my test tag',
        ownerId: 5
      }
    ];
    expect(tag(state, {
      type: CHANGE_TAG_NAME,
      payload: {id: 2, name: 'my test tag'}
    })).toEqual(expected);
  });
});
