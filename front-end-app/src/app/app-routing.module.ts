import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoshComponent } from './bosh/bosh.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { Kirilgan } from './route-check.security';

const routes: Routes = [
  { path: '', component: BoshComponent },
  { path: 'haqida', component: AboutComponent },
  { path: 'kirish', component: SignInComponent },
  { path: 'yangi', component: SignUpComponent },
  { path: 'ishmaydon', component: WorkspaceComponent, canActivate: [Kirilgan] } // Cheklash uchun
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
