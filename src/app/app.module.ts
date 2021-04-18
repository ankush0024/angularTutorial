import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsRoutingModule } from './features/rxjs/rxjs-routing.module';
import { viewChildModule } from './features/viewChild/viewChild.module';
import { contentChildModule } from './features/contentChild/contentChild.module';
import { inputOutputModule } from './features/inputOutput/inputOutput.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule/* ,RxjsRoutingModule */,/* viewChildModule, *//* contentChildModule */
    inputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
