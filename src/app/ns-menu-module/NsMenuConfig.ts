import { Type } from "@angular/core";

export class MenuItem {

    onMouseOver: boolean;

    constructor(public menuName: string, 
                public url:string, 
                public children?: MenuItem[]) {
        this.onMouseOver = false;
    }
    
}

export class NsMenu {
    constructor(public component: Type<any>, public data: MenuItem[]) { }
}