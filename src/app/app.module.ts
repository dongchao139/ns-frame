import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './LoginComponent';
import { HomeComponent } from './home/HomeComponent';
import { NsForm } from './ns-form-module/ns-form.module';
import { NsMenuModule } from './ns-menu-module/ns-menu.module';
import { MenuService } from './home/MenuService';
import { DynamicLoadDirective } from './home/DynamicLoadDirective';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DynamicLoadDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    NsForm,
    NsMenuModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
