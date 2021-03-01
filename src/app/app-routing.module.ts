import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/menu-tab/home/home.component';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';

const routes: Routes = [

  { path: '', component:  MenuTabComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mens', loadChildren: () => import('./components/mens-wear/mens-wear.module').then(m => m.MensWearModule) },
    { path: 'mensT', loadChildren: () => import('./components/mens-t-shirt/mens-t-shirt.module').then(m => m.MensTShirtModule) },
    { path: 'ladies', loadChildren: () => import('./components/ladies-wear/ladies-wear.module').then(m => m.LadiesWearModule) },
    { path: 'ladiesT', loadChildren: () => import('./components/ladies-t-shirt/ladies-t-shirt.module').then(m => m.LadiesTShirtModule) },
  ]},
  { path: 'cart', component:  CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
