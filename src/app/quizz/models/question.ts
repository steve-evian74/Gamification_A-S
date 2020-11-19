/**export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctIndex: number;
}*/

import { Answer } from '.';

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  correctIndex: number;
}



