import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp404Component } from './components/comp404/comp404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { RetryComponent } from './components/retry/retry.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: Comp1Component
      }, {
        path: 'switchMap', component: SwitchMapComponent
      }, {
        path: 'mergeMap', component: MergeMapComponent
      },
      { path: 'retry', component: RetryComponent }
    ]
  }, { path: '**', component: Comp404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
