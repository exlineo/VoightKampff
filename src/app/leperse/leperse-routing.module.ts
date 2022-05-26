import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveillanceComponent } from './surveillance/surveillance.component';

const routes: Routes = [
  {path:'', component:SurveillanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeperseRoutingModule { }
