import { Type } from "@angular/core";

export class MenuItem {

    onMouseOver: boolean;

    constructor(public menuName: string, 
                public url:string, 
                public children?: MenuItem[]) {
        this.onMouseOver = false;
    }

    checkChildrenShow(): boolean {
        if (this.onMouseOver) {
            return true;
        }
        return this.children.filter(child => child.onMouseOver || child.checkChildrenShow()).length > 0;
    }
}

export class NsMenu {
    constructor(public component: Type<any>, public data: MenuItem[]) { }
}