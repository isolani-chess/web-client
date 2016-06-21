/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ChessService } from './chess.service';
import { Piece } from 'chess-es6.js/piece';

describe('Chess Service', () => {
  beforeEachProviders(() => [ChessService]);

  it('should create the service',
      inject([ChessService], (service: ChessService) => {
    expect(service).toBeTruthy();
  }));

  it('should be white\'s turn at the beginning',
      inject([ChessService], (service: ChessService) => {
    expect(service.whitesTurn()).toBe(true);
  }));

  it('should convert int squares to algebraic notation',
      inject([ChessService], (service: ChessService) => {
    expect(service.squareToAlgebraic(84)).toBe('e3');
    expect(service.squareToAlgebraic(51)).toBe('d5');
  }));

  it('should convert chess-es6-style pieces to chessground-style pieces',
      inject([ChessService], (service: ChessService) => {
    expect(service.chess2groundPiece(Piece.BLACK_QUEEN)).toEqual({
        color: 'black',
        role: 'queen'
    });
    expect(service.chess2groundPiece(Piece.WHITE_KNIGHT)).toEqual({
        color: 'white',
        role: 'knight'
    });
    expect(service.chess2groundPiece(Piece.NONE)).toEqual(null);
  }));

  it('should determine the full name of the color to move',
      inject([ChessService], (service: ChessService) => {
    expect(service.getFullTurnColor()).toBe('white');
  }));

  it('should determine the full name of the color not to move',
      inject([ChessService], (service: ChessService) => {
    expect(service.getFullNotTurnColor()).toBe('black');
  }));

  it('should generate a chessground-style destination list of legal moves',
      inject([ChessService], (service: ChessService) => {
    let dests = {
        b1: ['a3', 'c3'],
        g1: ['f3', 'h3'],
        a2: ['a3', 'a4'],
        b2: ['b3', 'b4'],
        c2: ['c3', 'c4'],
        d2: ['d3', 'd4'],
        e2: ['e3', 'e4'],
        f2: ['f3', 'f4'],
        g2: ['g3', 'g4'],
        h2: ['h3', 'h4']
    };
    expect(service.getDests()).toEqual(dests);
  }));
});
