import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as AppState from '../../reducers';
import { QuizzState } from './quizz.reducer';



export interface State extends AppState.State {
  quizz: QuizzState;
}

// Selector functions
export const selectQuizState = createFeatureSelector<QuizzState>('quizz');


export const getQuestionQueue = createSelector(
  selectQuizState,
  state => state.questionQueue
);

export const selectQuestion = createSelector(
  selectQuizState,
  state => state.currentQuestion
);

export const selectQuizStatus = createSelector(
  selectQuizState,
  state => state.isFinised
);

export const selectScoreDetails = createSelector(
  selectQuizState,
  state => state.answers
);

export const selectScore = createSelector(
  selectQuizState,
  state => state.score
);

export const selectLevel = createSelector(
  selectQuizState,
  state => state.level
);



