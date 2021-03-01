import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensTShirtRoutingModule } from './mens-t-shirt-routing.module';
import { MensTShirtComponent } from './mens-t-shirt.component';


@NgModule({
  declarations: [MensTShirtComponent],
  imports: [
    CommonModule,
    MensTShirtRoutingModule
  ]
})
export class MensTShirtModule { }
