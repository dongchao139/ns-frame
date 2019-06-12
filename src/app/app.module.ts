import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './LoginComponent';
import { HomeComponent } from './HomeComponent';
import { NsForm } from './ns-form-module/ns-form.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NsForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
