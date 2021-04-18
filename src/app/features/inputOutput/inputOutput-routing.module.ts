import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

const routes: Routes = [
    {path:'InputOutput',redirectTo:'InputOutput/parent',pathMatch:'full'
    },
    {
        path: 'InputOutput/parent', component: ParentComponent
        //, children: [{ path: 'child', component: ChildComponent }]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class inputOutputRoutingModule { }
