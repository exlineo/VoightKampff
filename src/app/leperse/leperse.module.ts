import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeperseRoutingModule } from './leperse-routing.module';
import { SurveillanceComponent } from './surveillance/surveillance.component';


@NgModule({
  declarations: [
    SurveillanceComponent
  ],
  imports: [
    CommonModule,
    LeperseRoutingModule
  ]
})
export class LeperseModule { }
