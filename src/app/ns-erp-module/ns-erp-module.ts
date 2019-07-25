import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./components/HomeComponent";
import {LoginComponent} from "./components/LoginComponent";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuItemComponent, NsMenuComponent} from "./components/NsMenuComponent";
import {NavTabComponent} from "./components/NavTabComponent";
import {ErpMenuService} from "./ErpMenuService";
import {NsBaseModule} from "../app-base-module/ns-base.module";

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        NsMenuComponent,
        MenuItemComponent,
        NavTabComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NsBaseModule
    ],
    exports: [HomeComponent, LoginComponent, NsMenuComponent],
    providers: [ErpMenuService]
})
export class NsErpModule {
}
