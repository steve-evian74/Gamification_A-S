import { createAction, props } from '@ngrx/store';
import { Question } from '../models';

export const loadLevel = createAction(
  '[Quizz Page] Load Level'
);

export const loadLevelSuccess = createAction(
  '[Quizz Page] Load Level Success',
  props<{ level: string }>()
);

export const loadLevelFailure = createAction(
  '[Quizz Page] Load Level Fail',
  props<{ error: string }>()
);

export const loadQuestions = createAction(
  '[Quizz Page] Load Questions',
);

export const loadQuestionsSuccess = createAction(
  '[Quizz Page] Load Questions Success',
  props<{ questions: Question[] }>()
);

export const loadQuestionsFailure = createAction(
  '[Quizz Page] Load Questions Fail',
  props<{ error: string }>()
);

export const validate = createAction(
  '[Quizz Page] Validate',
  props<{ any }>()
);

