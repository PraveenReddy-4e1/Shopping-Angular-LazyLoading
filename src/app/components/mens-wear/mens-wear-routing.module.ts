import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from '../menu-tab/common/item-details/item-details.component';
import { ListItemsComponent } from '../menu-tab/common/list-items/list-items.component';

import { MensWearComponent } from './mens-wear.component';

const routes: Routes = [{ path: '', component: MensWearComponent,
  children:[
      { path: '', component: ListItemsComponent},
      { path: 'details/:id', component: ItemDetailsComponent},
     ]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensWearRoutingModule { }
