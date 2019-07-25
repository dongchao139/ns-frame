import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NsFormModule} from './ns-form-module/ns-form.module';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {DynamicDemo} from "./app-demo/DynamicDemo";
import {ContentProjectDemo} from "./app-demo/ContentProjectDemo";
import {HttpClientModule} from "@angular/common/http";
import {NsErpModule} from "./ns-erp-module/ns-erp-module";
import {LoginService} from "./app-common-directory/LoginService";
import {LoginGuard} from "./app-common-directory/LoginGuard";
import {MenuService} from "./app-common-directory/MenuService";
import {NsBasicModule} from "./ns-basic-module/ns-basic.module";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        DynamicDemo,
        ContentProjectDemo
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NsFormModule,
        HttpClientModule,
        ClarityModule,
        NsErpModule,
        NsBasicModule
    ],
    providers: [LoginService, LoginGuard, MenuService],
    entryComponents:[DynamicDemo, ContentProjectDemo],
    bootstrap: [AppComponent]
})
export class AppModule {
}
