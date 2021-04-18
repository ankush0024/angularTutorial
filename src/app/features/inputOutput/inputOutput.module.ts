import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  inputOutputRoutingModule } from './inputOutput-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        ],
    imports: [
        CommonModule,
        inputOutputRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
    providers: []
})
export class inputOutputModule { }
