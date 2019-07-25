import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicLoadDirective} from "./directive/DynamicLoadDirective";

@NgModule({
    declarations: [
        DynamicLoadDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [DynamicLoadDirective],
    providers: []
})
export class NsBasicModule {
}
