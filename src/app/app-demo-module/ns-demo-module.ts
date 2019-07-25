import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContentProjectDemo} from "./ContentProjectDemo";
import {DynamicDemo} from "./DynamicDemo";
import {NsBaseModule} from "../app-base-module/ns-base.module";

@NgModule({
    declarations: [
        ContentProjectDemo,
        DynamicDemo
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        NsBaseModule
    ],
    exports: [ContentProjectDemo, DynamicDemo]
})
export class NsDemoModule {
}
