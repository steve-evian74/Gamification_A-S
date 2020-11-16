import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/quizz', pathMatch: 'full' },
  {
    path: 'quizz',
    loadChildren: () =>
      import('./quizz/quizz.module').then(m => m.QuizzModule)
  },
  // otherwise redirect to home
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
