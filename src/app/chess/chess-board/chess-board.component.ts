import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Flags } from 'chess-es6.js/flags';
import { Move } from 'chess-es6.js/move';
import { PieceType } from 'chess-es6.js/piece_type';
const Chessground = require('chessground');

import { ChessService, ground2chessPieceType } from '../shared';

@Component({
  selector: 'app-chess-board',
  templateUrl: 'chess-board.component.html',
  styleUrls: ['chess-board.component.scss']
})
export class ChessBoardComponent implements AfterViewInit {
  private startedPromotion = false;

  @ViewChild('chessground') chessground;

  ground: any;

  chessgroundOptions = {
    movable: {
      free: false
    },
    events: {
      move: (orig, dest, capturedPiece) => this.onBoardMove(orig, dest, capturedPiece)
    }
  };
  constructor(private cdRef: ChangeDetectorRef, private chessService: ChessService) { }

  // ngOnInit can't be used because the ViewChild wouldn't have been initialized yet
  ngAfterViewInit() {
    this.ground = Chessground(this.chessground.nativeElement, this.chessgroundOptions);
    this.updateLegalMoves();
    // to get around a bug where Chessground calculates its borders before it's been properly set up,
    // this command resets thise borders
    this.ground.dump().bounds.clear();
  }

  update() {
    this.updatePosition();
    this.updateLegalMoves();
    this.ground.set({
      lastMove: null
    });
  }

  onBoardMove(orig, dest, capturedPiece) {
    this.startedPromotion = false;
    let move = this.chessService.chess.makeMoveFromAlgebraic(orig, dest).move;
    // check if move is a promotion:
    if (move.flags & Flags.PROMOTION) {
      this.startedPromotion = true; // to render the promotion choice visible
    }
    this.updatePosition();
    this.updateLegalMoves();
    this.cdRef.detectChanges();
  }

  getFullNotTurnColor(): string {
    return this.chessService.getFullNotTurnColor();
  }

  rotateBoard() {
    this.ground.toggleOrientation();
  }

  back() {
    this.chessService.chess.prev();
    this.update();
  }

  forward() {
    this.chessService.chess.next();
    this.update();
  }

  private updatePosition() {
    let array = {};
    for (let square of Move.SQUARES_LOOKUP) {
      array[square] = this.chessService.chess2groundPiece(this.chessService.chess.get(square));
    }
    this.ground.setPieces(array);
  }

  private setPromotion(groundPieceType) {
    let pieceType = ground2chessPieceType(groundPieceType);
    if (pieceType === PieceType.QUEEN) {
      this.startedPromotion = false;
      // queen is the default and has already been used automatically
      return;
    }

    let oldMove = this.chessService.chess.currentGame.currentVariation.undoCurrentMove();

    // redo the altered move:
    this.chessService.chess.makeMoveFromAlgebraic(
      this.chessService.squareToAlgebraic(oldMove.from),
      this.chessService.squareToAlgebraic(oldMove.to),
      pieceType);

    this.updatePosition();
    // update legal moves (might have changed because the new piece gives check/...
    this.updateLegalMoves();

    this.startedPromotion = false;
  }

  private updateLegalMoves() {
    this.ground.set({
      turnColor: this.chessService.getFullTurnColor(),
      movable: {
        color: this.chessService.getFullTurnColor(),
        dests: this.chessService.getDests()
      }
    });
  }
}
