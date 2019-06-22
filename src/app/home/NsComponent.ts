import {Type} from '@angular/core';
import {NavTabItem} from "../ns-menu-module/NsMenuConfig";

export interface DynamicComponent {
    data: any;
}

export class NsComponent<T> {
    constructor(public component: Type<DynamicComponent>, public data?: T,
                public tabItem?:NavTabItem, public items?:NsComponent<any>[]) { }
}
