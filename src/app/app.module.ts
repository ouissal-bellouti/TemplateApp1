import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ListeCategorieComponent } from './pages/categories/liste-categorie/liste-categorie.component';
import { AddCategorieComponent } from './pages/categories/add-categorie/add-categorie.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormBuilder,
    AppRoutingModule,
    ToastrModule.forRoot()

  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ListeCategorieComponent, AddCategorieComponent ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
