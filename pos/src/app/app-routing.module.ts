import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import {LogoutComponent} from "./logout/logout.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'setting', component: SettingComponent },
  ]},
  { path: 'logout', component: LogoutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
