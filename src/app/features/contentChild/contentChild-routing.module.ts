import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

const routes: Routes = [
    {path:'ContentChild',redirectTo:'ContentChild/parent',pathMatch:'full'
    },
    {
        path: 'ContentChild/parent', component: ParentComponent
        //, children: [{ path: 'child', component: ChildComponent }]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class contentChildRoutingModule { }
