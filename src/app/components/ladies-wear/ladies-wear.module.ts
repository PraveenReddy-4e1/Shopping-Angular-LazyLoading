import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadiesWearRoutingModule } from './ladies-wear-routing.module';
import { LadiesWearComponent } from './ladies-wear.component';


@NgModule({
  declarations: [LadiesWearComponent],
  imports: [
    CommonModule,
    LadiesWearRoutingModule
  ]
})
export class LadiesWearModule { }
