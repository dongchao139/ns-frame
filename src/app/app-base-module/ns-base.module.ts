import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DynamicLoadDirective} from "./directive/DynamicLoadDirective";
import {LoginService} from "./service/LoginService";
import {MenuService} from "./service/MenuService";

@NgModule({
    declarations: [
       DynamicLoadDirective
    ],
    imports: [
        CommonModule
    ],
    providers:[LoginService, MenuService],
    exports: [DynamicLoadDirective]
})
export class NsBaseModule {
}
