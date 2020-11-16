import { createReducer, on } from '@ngrx/store';
import { QuizzActions } from '../actions';
import { Question } from '../models';

// State for this feature (Quizz)
export interface QuizzState {
  currentQuestions: Question[] | null;
  currentQuestionId: number | null;
  currentLevel: string | null;
  error: string;
}

const initialState: QuizzState = {
  currentQuestions: null,
  currentQuestionId: null,
  currentLevel: null,
  error: '',
};

export const quizzReducer = createReducer(
  initialState,
  on(QuizzActions.loadLevelSuccess, (state, action): QuizzState => {
    return {
      ...state,
      currentLevel: action.level,
      error: ''
    };
  }),
  on(QuizzActions.loadLevelFailure, (state, action): QuizzState => {
    return {
      ...state,
      currentLevel: null,
      error: action.error
    };
  }),

  on(QuizzActions.loadQuestionsSuccess, (state, action): QuizzState => {
    return {
      ...state,
      currentQuestions: action.questions,
      error: ''
    };
  }),
  on(QuizzActions.loadQuestionsFailure, (state, action): QuizzState => {
    return {
      ...state,
      currentQuestions: null,
      error: action.error
    };
  }),

)

