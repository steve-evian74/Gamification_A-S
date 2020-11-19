import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuizzActions } from '../actions';
import { LocalStorageService, QuizzService } from '../services';
import { catchError, exhaustMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuizzState } from '../reducers/quizz.reducer';

interface AppState {
  quizz: QuizzState;
}

@Injectable()
export class QuizzEffects {

  getQuiz$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.getQuiz),
      mergeMap(() => this.quizzService.getQuiz()
      .pipe(
        map(payload => QuizzActions.getQuizSuccess( {payload} )),
        catchError(error => of(QuizzActions.getQuizFailure({ error })))
        )
      )
    );
  });

  getQuizSuccess$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.getQuizSuccess),
      tap(() => {
        this.store.dispatch(QuizzActions.getQuestion());
      })
    );
  },
  { dispatch: false }
  );

  getQuestion$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.getQuestion),
      withLatestFrom(this.store),
      map(([action, store]) => {
        const questionQueue = store.quizz.questionQueue;
        // Check if there is question in the queue
        if (questionQueue.length > 0 && typeof questionQueue[0].id === 'number') {
           return QuizzActions.getQuestionSuccess({payload: questionQueue[0]});
         } else {
           return QuizzActions.getScore();
         }
        }
      )
    );
  });

  answerSuccess$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.getAnswerSuccess),
      withLatestFrom(this.store),
      map(([action, store]) => {
      // if all questions answered
      if (store.quizz.progress === store.quizz.quiz.questions.length) {
        this.store.dispatch(QuizzActions.updateScore(action));
        this.router.navigateByUrl('score');
        return QuizzActions.getScore();
      } else {
        this.store.dispatch(QuizzActions.updateScore(action));
        return QuizzActions.getQuestion();
      }
        }
      )
    );
  });

  updateScore$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.updateScore),
      exhaustMap(({payload}) => of(this.quizzService.updateScore({payload}))
      .pipe(
        map(test => QuizzActions.updateScoreTrue( {payload: test} )),
        catchError(error => of(QuizzActions.updateScoreFalse()))
        )
      )
    );
  });


  constructor(
    private actions$: Actions,
    private quizzService: QuizzService,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}
}
