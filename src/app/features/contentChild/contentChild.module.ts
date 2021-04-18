import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contentChildRoutingModule } from './contentChild-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ChangeColorDirective } from './shared/change-color.directive';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        ChangeColorDirective],
    imports: [
        CommonModule,
        contentChildRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
    providers: []
})
export class contentChildModule { }
