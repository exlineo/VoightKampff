import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { QuestionComponent } from './pages/question/question.component';
import { CreeCompteComponent } from './pages/cree-compte/cree-compte.component';

const routes: Routes = [
  {path:'', component:QuestionsComponent},
  {path:'question', component:QuestionComponent},
  {path:'question/:id', component:QuestionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'compte', component:CreeCompteComponent},
  {path:'leperse', loadChildren: () => import('./leperse/leperse.module').then(m => m.LeperseModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
