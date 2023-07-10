export interface Word {
  _id: string;
  word: string;
  description: string;
  bin: number;
  wrongCount: number;
  timeToNextAppearance: number;
}
