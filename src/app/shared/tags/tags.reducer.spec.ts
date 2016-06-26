/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {
  tags,
  ADD_TAG,
  REMOVE_TAG,
  CHANGE_TAG_OWNER,
  CHANGE_TAG_NAME,
  TagState
} from './tags.reducer';
import { Tag } from './tag';

describe('Tag reducer', () => {
  const NON_EXISTENT = {
    type: 'NON_EXISTENT'
  };
  it('should return the default state', () => {
    expect(tags(undefined, NON_EXISTENT)).toEqual({
      isFetching: false,
      tags: []
    });
  });

  it('should return the same state on invalid action', () => {
    const state: TagState = {
      isFetching: false,
      tags: [{
        id: 1,
        ownerId: 2,
        name: 'my test tag'
      }]
    };
    expect(tags(state, NON_EXISTENT)).toEqual(state);
  });

  it('should add a tag', () => {
    const state: TagState = {
      isFetching: false,
      tags: [{
        id: 1,
        ownerId: 2,
        name: 'my test tag'
      }]
    };
    const newTag: Tag = {
      id: 2,
      ownerId: 7,
      name: 'my second test tag'
    };
    const expected: TagState = {
      isFetching: false,
      tags: [{
        id: 1,
        ownerId: 2,
        name: 'my test tag'
      },
      {
        id: 2,
        ownerId: 7,
        name: 'my second test tag'
      }]
    };
    expect(tags(state, {
      type: ADD_TAG,
      payload: newTag
    })).toEqual(expected);
  });

  it('should remove a tag', () => {
    const state: TagState = {
      isFetching: false,
      tags: [{
        id: 1,
        ownerId: 2,
        name: 'my test tag'
      }]
    };
    expect(tags(state, {
      type: REMOVE_TAG,
      payload: 1
    })).toEqual({
      isFetching: false,
      tags: []
    });
  });

  it('should change the owner of a tag', () => {
    const state: TagState = {
      isFetching: false,
      tags: [
        {
          id: 1,
          ownerId: 2,
          name: 'my test tag'
        },
        {
          id: 2,
          ownerId: 5,
          name: 'my second test tag'
        }
      ]
    };
    const expected: TagState = {
      isFetching: false,
      tags: [
        {
          id: 1,
          ownerId: 5,
          name: 'my test tag'
        },
        {
          id: 2,
          ownerId: 5,
          name: 'my second test tag'
        }
      ]
    };
    expect(tags(state, {
      type: CHANGE_TAG_OWNER,
      payload: {id: 1, ownerId: 5}
    })).toEqual(expected);
  });

  it('should change the name of a tag', () => {
    const state: TagState = {
      isFetching: false,
      tags: [
        {
          id: 1,
          ownerId: 2,
          name: 'my test tag'
        },
        {
          id: 2,
          ownerId: 5,
          name: 'my test tag'
        }
      ]
    };
    const expected: TagState = {
      isFetching: false,
      tags: [
        {
          id: 1,
          ownerId: 2,
          name: 'my test tag'
        },
        {
          id: 2,
          ownerId: 5,
          name: 'my second test tag'
        }
      ]
    };
    expect(tags(state, {
      type: CHANGE_TAG_NAME,
      payload: {id: 2, name: 'my second test tag'}
    })).toEqual(expected);
  });
});
