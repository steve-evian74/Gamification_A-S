import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzComponent } from './components';
import { QuizzPageComponent } from './containers';


const routes: Routes = [
  {path: '', component: QuizzPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class QuizzRoutingModule {}
