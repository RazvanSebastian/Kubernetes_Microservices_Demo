import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiInteractionsComponent } from './api-interactions/api-interactions.component';
import { HomeComponent } from './home/home.component';
import { ManagementInfoComponent } from './management-info/management-info.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "api-interaction",
    component: ApiInteractionsComponent
  },
  {
    path: "management-info",
    component: ManagementInfoComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
