import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensWearRoutingModule } from './mens-wear-routing.module';
import { MensWearComponent } from './mens-wear.component';


@NgModule({
  declarations: [MensWearComponent],
  imports: [
    CommonModule,
    MensWearRoutingModule
  ]
})
export class MensWearModule { }
