import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from '../menu-tab/common/list-items/list-items.component';
import { ItemDetailsComponent } from '../menu-tab/common/item-details/item-details.component';
import { LadiesWearComponent } from './ladies-wear.component';

const routes: Routes = [{ path: '', component: LadiesWearComponent,
children:[
{ path: '', component: ListItemsComponent},
{ path: 'details/:id', component: ItemDetailsComponent},
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LadiesWearRoutingModule { }
