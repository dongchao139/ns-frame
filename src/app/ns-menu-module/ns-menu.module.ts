import {NgModule} from '@angular/core';
import {MenuItemComponent, NsMenuComponent} from './components/NsMenuComponent';
import {CommonModule} from '@angular/common';
import {NavTabComponent} from './components/NavTabComponent';
import {DynamicLoadDirective} from "./directives/DynamicLoadDirective";

@NgModule({
    declarations: [
        NsMenuComponent,
        MenuItemComponent,
        DynamicLoadDirective,
        NavTabComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [NsMenuComponent, NavTabComponent, DynamicLoadDirective],
    providers: [],
    entryComponents: [NsMenuComponent]
})
export class NsMenuModule {
}
