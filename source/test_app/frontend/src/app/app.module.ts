import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorViewComponent } from './errorview/errorview.component';
import { ErrorsService } from './errorview/errorview.service';
import { EmployeeViewComponent } from './employeeview/employeeview.component';
import { EmployerviewComponent } from './employerview/employerview.component';
import { EmployerDetailedViewComponent } from './employerview/employerdetailedview.component';
import { EmployerService } from './employerview/employerview.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorViewComponent,
    EmployeeViewComponent,
    EmployerviewComponent,
    EmployerDetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ErrorsService, EmployerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
