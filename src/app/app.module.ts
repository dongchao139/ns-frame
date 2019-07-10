import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './ns-basic-page/components/LoginComponent';
import {HomeComponent} from './ns-basic-page/components/HomeComponent';
import {NsFormModule} from './ns-form-module/ns-form.module';
import {NsMenuModule} from './ns-menu-module/ns-menu.module';
import {MenuService} from './ns-basic-page/service/MenuService';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicDemo} from "./ns-menu-module/dynamic/DynamicDemo";
import {ContentProjectDemo} from "./ns-menu-module/dynamic/ContentProjectDemo";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from "./ns-basic-page/service/LoginService";
import {LoginGuard} from "./ns-basic-page/guard/LoginGuard";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DynamicDemo,
        ContentProjectDemo
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NsFormModule,
        NsMenuModule,
        HttpClientModule,
        ClarityModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [MenuService, LoginService, LoginGuard],
    entryComponents:[DynamicDemo,ContentProjectDemo],
    bootstrap: [AppComponent]
})
export class AppModule {
}
