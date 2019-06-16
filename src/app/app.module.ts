import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './LoginComponent';
import { HomeComponent } from './home/HomeComponent';
import { NsForm } from './ns-form-module/ns-form.module';
import { NsMenuModule } from './ns-menu-module/ns-menu.module';
import { MenuService } from './home/MenuService';
import { DynamicLoadDirective } from './home/DynamicLoadDirective';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DynamicLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NsForm,
    NsMenuModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
