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
export const getQuizzFeatureState = createFeatureSelector<QuizzState>('quizz');

export const getLevel = createSelector(
  getQuizzFeatureState,
  state => state.currentLevel
);

export const getCurrentQuestions = createSelector(
  getQuizzFeatureState,
  state => state.currentQuestions
);
