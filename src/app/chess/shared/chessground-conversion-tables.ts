import { Color } from 'chess-es6.js/color';
import { PieceType } from 'chess-es6.js/piece_type';

export function chess2groundColor(color: string): string {
  if (color === Color.WHITE) {
    return 'white';
  }
  return 'black';
}

export function ground2chessColor(color: string): string {
  if (color === 'white') {
    return Color.WHITE;
  }
  return Color.BLACK;
}

export function chess2groundPieceType(pieceType: string): any {
  switch (pieceType) {
  case PieceType.NONE:
    return null;
  case PieceType.PAWN:
    return 'pawn';
  case PieceType.KNIGHT:
    return 'knight';
  case PieceType.BISHOP:
    return 'bishop';
  case PieceType.ROOK:
    return 'rook';
  case PieceType.QUEEN:
    return 'queen';
  case PieceType.KING:
    return 'king';
  default:
    throw 'undefined piece type';
  }
}

export function ground2chessPieceType(pieceType: any): string {
  switch (pieceType) {
  case null:
    return PieceType.NONE;
  case 'pawn':
    return PieceType.PAWN;
  case 'knight':
    return PieceType.KNIGHT;
  case 'bishop':
    return PieceType.BISHOP;
  case 'rook':
    return PieceType.ROOK;
  case 'queen':
    return PieceType.QUEEN;
  case 'king':
    return PieceType.KING;
  default:
    throw 'undefined piece type';
  }
}
