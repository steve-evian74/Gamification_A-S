import { createAction, props } from '@ngrx/store';
import { Answering, Question, Quiz } from '../models';

export const getQuiz = createAction(
  '[Quizz Page] Get Quiz'
);

export const getQuizSuccess = createAction(
  '[Quizz Page] Get Quiz Success',
  props<{ payload: Quiz }>()
);

export const getQuizFailure = createAction(
  '[Quizz Page] Get Quiz Fail',
  props<{ error: string }>()
);

export const getQuestion = createAction(
  '[Quizz Page] Get Question',
);

export const getQuestionSuccess = createAction(
  '[Quizz Page] Get Question Success',
  props<{ payload: Question }>()
);

export const getQuestionFailure = createAction(
  '[Quizz Page] Get Question Fail',
  props<{ error: string }>()
);

export const getAnswerSuccess = createAction(
  '[Quizz Page] Answer Question Success',
  props<{ payload: Answering }>()
);

export const getAnswerFailure = createAction(
  '[Quizz Page] Answer Question Fail',
  props<{ error: string }>()
);

export const getScore = createAction(
  '[Quizz Page] Get Score'
);

export const validate = createAction(
  '[Quizz Page] Validate',
  props<{ any }>()
);

export const updateScore = createAction(
  '[Quizz Page] Update Score',
  props< {payload: Answering }>()
);

export const updateScoreTrue = createAction(
  '[Quizz Page] Update Score True',
  props< {payload: number }>()
);

export const updateScoreFalse = createAction(
  '[Quizz Page] Update Score False',
);

export const reset = createAction(
  '[Quizz Page] Reset State',
);

export const setLevel = createAction(
  '[Quizz Page] Set Level',
  props< {payload: any }>()
);


