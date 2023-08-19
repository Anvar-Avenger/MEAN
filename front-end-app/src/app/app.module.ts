import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoshComponent } from './bosh/bosh.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthService } from "./auth.service";
import { RequestService } from './request.service'

import { Kirilgan } from "./route-check.security";

@NgModule({
  declarations: [
    AppComponent,
    BoshComponent,
    SignInComponent,
    SignUpComponent,
    WorkspaceComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    RequestService,
    Kirilgan
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
