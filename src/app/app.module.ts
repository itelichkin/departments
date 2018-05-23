import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './modules/material.module';
import {AppHeaderComponent} from './app-header/app-header.component';
import {DepartmentsListComponent} from './pages/departments-list/departments-list.component';
import {MainService} from './services/main.service';
import {DepartmentItemComponent} from './pages/department-item/department-item.component';
import {EmployeeListComponent} from './pages/employee-list/employee-list.component';
import {EmployeeItemComponent} from './pages/employee-item/employee-item.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule, OverlayPanelModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/shared';
import {PageDefaultComponent} from './pages/page-default/page-default.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HttpClientService} from './services/http-client.service';
import {HeadersService} from './services/headers.service';
import {ErrorService} from './services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DepartmentsListComponent,
    DepartmentItemComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    PageNotFoundComponent,
    PageDefaultComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    OverlayPanelModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [MainService, AppComponent, HttpClientService, HeadersService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
