import {Type} from '@angular/core';
import {NavTabItem} from "../ns-menu-module/NsMenuConfig";

export interface DynamicComponent {
    data: any;
}

export class NsComponent<T> {
    constructor(public component: Type<DynamicComponent>, //组件类
                public data?: T,    //组件的输入属性
                public tabItem?:NavTabItem  //对应的tab页名称和菜单url
                ) { }
}
