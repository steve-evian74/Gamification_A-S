import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuizzService } from './quizz/services';
import { QuizzEffects } from './quizz/effects';
import { QuizzModule } from './quizz/quizz.module';
import { MaterialModule } from './material';
import { metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';




export const COMPONENTS = [
  AppComponent,
];
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    QuizzModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(metaReducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Gamification App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
