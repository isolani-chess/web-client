export interface JCFGame {
  meta?: any;
  moves: JCFMove[]
}

export interface JCFMove {
  from: string;
  to: string;
  promotion?: string;
  variations?: Array<JCFMove[]>
  comment?: string;
  NAGs?: number[];
}
