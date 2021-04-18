import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import {HttpClientModule } from '@angular/common/http';
import { Comp404Component } from './components/comp404/comp404.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { RetryComponent } from './components/retry/retry.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp404Component,
    SwitchMapComponent,
    MergeMapComponent,
    RetryComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
