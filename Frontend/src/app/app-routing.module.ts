import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from '../app/modules/provider/provider.component';
//import { ViewproviderComponent } from './modules/viewprovider/viewprovider.component';
import { ViewproviderComponent } from '../app/modules/provider/viewprovider/viewprovider.component';


const routes: Routes = [
{ path: '',   redirectTo: '/provider', pathMatch: 'full' },
 { 
    path: 'provider', 
    component: ProviderComponent,
    children: [
      { path: '', component: ProviderComponent},
      { path: 'view-provider/:id', component: ViewproviderComponent }
    ]
  },
  { 
    path: 'view-provider/:id', 
    component: ViewproviderComponent,
  },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
