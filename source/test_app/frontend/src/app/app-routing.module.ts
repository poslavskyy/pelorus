import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorDetailedViewComponent } from './errorview/errordetailedview.component';
import { ErrorViewComponent } from './errorview/errorview.component';
import { EmployerviewComponent } from './employerview/employerview.component';
import { EmployeeViewComponent } from './employeeview/employeeview.component';
import { EmployerDetailedViewComponent } from './employerview/employerdetailedview.component';

const routes: Routes = [
  { path: 'errorview', component: ErrorViewComponent},
  { path: 'employeeview', component: EmployeeViewComponent},
  { path: 'employerview', component: EmployerviewComponent},
  { path: 'errorview/:errorNumber', component: ErrorDetailedViewComponent},
  { path: 'employerview/:recordID', component: EmployerDetailedViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
