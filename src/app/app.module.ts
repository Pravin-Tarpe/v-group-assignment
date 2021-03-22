import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateEmployeeRecordComponent } from './create-employee-record/create-employee-record.component';
import { EditEmployeeRecordComponent } from './edit-employee-record/edit-employee-record.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CreateEmployeeRecordComponent,
    EditEmployeeRecordComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
