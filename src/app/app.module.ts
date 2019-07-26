import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NsFormModule} from './ns-form-module/ns-form.module';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {DynamicDemo} from "./app-demo-module/DynamicDemo";
import {ContentProjectDemo} from "./app-demo-module/ContentProjectDemo";
import {HttpClientModule} from "@angular/common/http";
import {NsErpModule} from "./ns-erp-module/ns-erp-module";
import {LoginService} from "./app-common-directory/service/LoginService";
import {LoginGuard} from "./app-common-directory/LoginGuard";
import {MenuService} from "./app-common-directory/service/MenuService";
import {CommonModule} from "@angular/common";
import {NsDemoModule} from "./app-demo-module/ns-demo-module";
import {AbstractLoginService} from "./app-base-module/abstract-services/AbstractLoginService";
import {AbstractMenuService} from "./app-base-module/abstract-services/AbstractMenuService";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NsFormModule,
        HttpClientModule,
        ClarityModule,
        NsErpModule,
        NsDemoModule
    ],
    providers: [
        {provide: AbstractLoginService, useClass: LoginService},
        {provide: AbstractMenuService, useClass: MenuService},
        LoginGuard
    ],
    entryComponents:[DynamicDemo, ContentProjectDemo],
    bootstrap: [AppComponent]
})
export class AppModule {
}
