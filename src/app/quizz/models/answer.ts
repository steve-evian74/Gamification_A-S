import { Question } from './question';

export interface Answer {
  text: string;
  Index: number;
}

export interface Answering {
  question: Question;
  answerIndex: number;
}
