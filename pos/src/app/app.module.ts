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
import { LaraService } from './service/laravel/lara.service';
import {CookieService} from "ngx-cookie-service";

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent, LoginComponentDialog, LoginDialogComponentDialog } from './login/login.component';
import { ChairsComponent, ChairsComponentDialog, ChairsComponentAddDialog, ChairsComponentEditDialog } from './chairs/chairs.component';
import { RedirectBlankComponent } from './redirect-blank/redirect-blank.component';
import { CommonComponent, CommonComponentConfirmDialog } from './common/common.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SettingComponent,
    LogoutComponent,
    LoginComponent,
    LoginComponentDialog,
    LoginDialogComponentDialog,
    ChairsComponent,
    ChairsComponentDialog,
    ChairsComponentAddDialog,
    ChairsComponentEditDialog,
    RedirectBlankComponent,
    CommonComponent,
    CommonComponentConfirmDialog,
    ProductsComponent,
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
  entryComponents: [
    LoginComponentDialog,
    LoginDialogComponentDialog,
    ChairsComponentDialog,
    ChairsComponentAddDialog,
    ChairsComponentEditDialog,
    CommonComponentConfirmDialog,
  ],
  providers: [WpService, StoreService, CookieService, LaraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
