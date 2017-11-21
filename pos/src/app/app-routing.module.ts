import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from './login/login.component';
import { ChairsComponent } from "./chairs/chairs.component";
import { RedirectBlankComponent } from "./redirect-blank/redirect-blank.component"

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'chairs', component: ChairsComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'blank', component: RedirectBlankComponent },
  { path: '**', component: LogoutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
