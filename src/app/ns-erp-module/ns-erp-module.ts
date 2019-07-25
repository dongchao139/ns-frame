import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./components/HomeComponent";
import {LoginComponent} from "./components/LoginComponent";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NsBasicModule} from "../ns-basic-module/ns-basic.module";
import {MenuItemComponent, NsMenuComponent} from "./components/NsMenuComponent";
import {NavTabComponent} from "./components/NavTabComponent";
import {NsErpMenuService} from "./NsErpMenuService";

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
        NsBasicModule
    ],
    exports: [HomeComponent, LoginComponent, NsMenuComponent],
    providers: [NsErpMenuService]
})
export class NsErpModule {
}
