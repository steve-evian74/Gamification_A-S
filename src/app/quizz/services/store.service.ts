import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizzActions } from '../actions';
import { Answering, Question } from '../models';
import { selectQuestion, selectScore, selectScoreDetails, State, selectQuizStatus, selectLevel } from '../reducers';


@Injectable()

export class StoreService {

  constructor(private store: Store<State>) {}

  setInitialState() {
    return this.store.dispatch(QuizzActions.reset());
  }

  getQuiz() {
    return this.store.dispatch(QuizzActions.getQuiz());
  }

  getQuestion() {
    this.store.dispatch(QuizzActions.getQuestion());
  }

  postAnswer(answer: Answering) {
    this.store.dispatch(QuizzActions.getAnswerSuccess({payload: answer}));
  }

  setLevel(level: any) {
    if (level === null) {
      level = 1;
    }
    return this.store.dispatch(QuizzActions.setLevel({payload: level}));
  }

  get currentQuestion(): Observable<Question> {
    return this.store.select(selectQuestion);
  }

  get level(): Observable<any> {
    return this.store.select(selectLevel);
  }

  get quizScoreDetails(): Observable<Answering[]> {
    return this.store.select(selectScoreDetails);
  }

  get quizScore(): Observable<number> {
    return this.store.select(selectScore);
  }

  get quizStatus(): Observable<boolean> {
    return this.store.select(selectQuizStatus);
  }
}

