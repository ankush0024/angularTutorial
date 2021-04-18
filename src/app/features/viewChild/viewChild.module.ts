import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { viewChildRoutingModule } from './viewChild-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent],
    imports: [
        CommonModule,
        viewChildRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
    providers: []
})
export class viewChildModule { }
