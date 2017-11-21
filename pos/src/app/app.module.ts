import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';


//Service
import { WpService } from './service/wp/wp.service';
import {StoreService} from "./service/cookies/store.service";
import {CookieService} from "ngx-cookie-service";

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent, LoginComponentDialog } from './login/login.component';
import { ChairsComponent, ChairsComponentDialog, ChairsComponentAddDialog } from './chairs/chairs.component';
import { RedirectBlankComponent } from './redirect-blank/redirect-blank.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SettingComponent,
    LogoutComponent,
    LoginComponent,
    LoginComponentDialog,
    ChairsComponent,
    ChairsComponentDialog,
    ChairsComponentAddDialog,
    RedirectBlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
  ],
  entryComponents: [LoginComponentDialog, ChairsComponentDialog, ChairsComponentAddDialog],
  providers: [WpService, StoreService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
