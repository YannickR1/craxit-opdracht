import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { ButtonComponent } from './components/button/button.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';
import { HouseListItemComponent } from './components/house-list-item/house-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    HouseListComponent,
    ButtonComponent,
    HouseDetailsComponent,
    RemoveButtonComponent,
    HouseListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
