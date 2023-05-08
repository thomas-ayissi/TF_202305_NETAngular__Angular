import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { DemosComponent } from './demos/demos.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'demos', children: [
    { path: '', component: DemosComponent },
    { path: 'demo01', component: Demo01Component },
    { path: 'demo02', component: Demo02Component },
    { path: 'demo03', component: Demo03Component },
    { path: 'demo04', component: Demo04Component },
    { path: 'demo05', component: Demo05Component },
  ] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
