import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { QuizzActions } from '../actions';
import { Answering, Question, Quiz } from '../models';

// State for this feature (Quizz)

export interface QuizzState {
  loading: boolean; // loading indicator for POST events
  quiz: Quiz;
  questionQueue: Question[]; // questions that will be answered
  currentQuestion: Question; // question that is displayed on screen
  answers: Answering[]; // answers are stored to show the score at the end
  isFinised: boolean;
  progress: number;
  score: number;
  error: string;
  level: number;
}

const initialState: QuizzState = {
  loading: false,
  quiz: null,
  questionQueue: [],
  currentQuestion: null,
  answers: [],
  isFinised: false,
  progress: 0,
  score: 0,
  level: null,
  error: '',
};

export const quizzReducer = createReducer(
  initialState,
  on(QuizzActions.getQuiz, (state, action): QuizzState => {
    return {
      ...state,
      loading: true,
      answers: [],
      error: ''
    };
  }),
  on(QuizzActions.getQuizSuccess, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      isFinised: false,
      quiz: action.payload,
      questionQueue: action.payload.questions,
      error: '',
    };
  }),
  on(QuizzActions.getQuizFailure, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),

  on(QuizzActions.getQuestion, (state, action): QuizzState => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(QuizzActions.getQuestionSuccess, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      currentQuestion: action.payload, // first question in the queue
      questionQueue: state.questionQueue.filter((item, index) => index > 0), // removing first element in the queue
      progress: state.progress + 1,
      error: ''
    };
  }),

  on(QuizzActions.getAnswerSuccess, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      answers: [...state.answers, action.payload],
      progress: [...state.answers, action.payload].length
    };
  }),

  on(QuizzActions.getAnswerFailure, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      questionQueue: [...state.questionQueue, state.currentQuestion],
  };
  }),

  on(QuizzActions.getQuestionFailure, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),

  on(QuizzActions.getScore, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      isFinised: true,
      error: ''
    };
  }),

  on(QuizzActions.updateScore, (state, action): QuizzState => {
    return {
      ...state,
      loading: true,
      error: ''
    };
  }),


  on(QuizzActions.updateScoreTrue, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
      score: state.score + action.payload,
      error: ''
    };
  }),

  on(QuizzActions.updateScoreFalse, (state, action): QuizzState => {
    return {
      ...state,
      loading: false,
    };
  }),

  on(QuizzActions.reset, (state, action): QuizzState => {
    return initialState;
  }),

  on(QuizzActions.setLevel, (state, action): QuizzState => {
    return {
      ...state,
      level: action.payload,
    };
  }),

)

