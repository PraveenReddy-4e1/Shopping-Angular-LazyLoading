import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from '../menu-tab/common/list-items/list-items.component';
import { ItemDetailsComponent } from '../menu-tab/common/item-details/item-details.component';
import { MensTShirtComponent } from './mens-t-shirt.component';

const routes: Routes = [{ path: '', component: MensTShirtComponent,
   children:[
  { path: '', component: ListItemsComponent},
  { path: 'details/:id', component: ItemDetailsComponent},
 ]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensTShirtRoutingModule { }
