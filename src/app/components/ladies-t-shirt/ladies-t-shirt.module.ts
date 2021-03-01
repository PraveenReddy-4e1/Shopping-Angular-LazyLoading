import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadiesTShirtRoutingModule } from './ladies-t-shirt-routing.module';
import { LadiesTShirtComponent } from './ladies-t-shirt.component';


@NgModule({
  declarations: [LadiesTShirtComponent],
  imports: [
    CommonModule,
    LadiesTShirtRoutingModule
  ]
})
export class LadiesTShirtModule { }
