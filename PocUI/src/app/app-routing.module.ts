import { RegisterComponent } from './public/components/register/register.component';

import { Comp1TestComponent } from './public/components/comp1-test/comp1-test.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from 'src/app/public/services/node_modules/@angular/router';
import { TestcomponentComponent } from './public/components/testcomponent/testcomponent.component';
import { SrHomeComponent } from './public/components/sr-home/sr-home.component';
import { LoginComponent } from './public/components/login/login.component';
import { GlobalErrorComponent } from './public/components/global-error/global-error.component';


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
