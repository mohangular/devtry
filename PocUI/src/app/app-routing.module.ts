import { RegisterComponent } from './core/components/register/register.component';

import { Comp1TestComponent } from './core/components/comp1-test/comp1-test.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestcomponentComponent } from './core/components/testcomponent/testcomponent.component';
import { SrHomeComponent } from './core/components/sr-home/sr-home.component';
import { LoginComponent } from './core/components/login/login.component';
import { GlobalErrorComponent } from './core/components/global-error/global-error.component';


const routes: Routes = [
  {
  path: 'test',
  component: TestcomponentComponent
},
{
  path: 'test1',
  component: Comp1TestComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'home',
  component: SrHomeComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'error',
  component: GlobalErrorComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
