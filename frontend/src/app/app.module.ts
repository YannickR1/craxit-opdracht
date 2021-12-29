import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { ButtonComponent } from './components/button/button.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';
import { HouseListItemComponent } from './components/house-list-item/house-list-item.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { EditHouseComponent } from './components/edit-house/edit-house.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
    HouseListComponent,
    ButtonComponent,
    HouseDetailsComponent,
    RemoveButtonComponent,
    HouseListItemComponent,
    AddHouseComponent,
    EditHouseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
