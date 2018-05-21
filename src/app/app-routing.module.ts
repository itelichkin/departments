import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DepartmentsListComponent} from './pages/departments-list/departments-list.component';
import {EmployeeListComponent} from './pages/employee-list/employee-list.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: AppComponent },
    { path: 'departments', component: DepartmentsListComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: '**', component: PageNotFoundComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

