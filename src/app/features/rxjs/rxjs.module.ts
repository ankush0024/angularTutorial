import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { Comp1Component } from './components/comp1/comp1.component';

import { Comp404Component } from './components/comp404/comp404.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';

import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { RetryComponent } from './components/retry/retry.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthServiceService } from './shared/auth-service.service';
import { DataServiceService } from './shared/data-service.service';

@NgModule({
  declarations: [
    Comp1Component,
    Comp404Component,
    SwitchMapComponent,
    MergeMapComponent,
    RetryComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [DataServiceService,AuthServiceService]
})
export class RxjsModule { }
