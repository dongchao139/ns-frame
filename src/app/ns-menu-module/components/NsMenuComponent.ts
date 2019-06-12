import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "../NsMenuConfig";

@Component({
    selector: 'ns-menu',
    template: `
    <ul>
        <ns-menu-item *ngFor="let oneMenu of menuList" [menuItem]="oneMenu"
            (clickEvent)='onClick(oneMenu)'>
        </ns-menu-item>
    </ul>
    `
})
export class NsMenuComponent {
    @Input() menuList: MenuItem[];
    @Output() clickMenu: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    constructor() { }

    onClick(menuItem: MenuItem) {
        this.clickMenu.emit(menuItem);
    }
}

@Component({
    selector: 'ns-menu-item',
    template: `
    <li (click)='onClick()' (mouseover)='onMouseOver()' (mouseout)='onMouseOut()'>
        <a href='menuItem.url'>{{menuItem.menuName}}</a>
        <ns-menu *ngIf='menuItem.children' [menuList]='menuItem.children' 
            [hidden]='!menuItem.onMouseOver'>
        </ns-menu>
    </li>
    `
})
export class MenuItemComponent {
    @Input() menuItem: MenuItem;
    @Output() clickEvent: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

    onClick() {
        this.clickEvent.emit(this.menuItem);
    }

    onMouseOver() {
        this.menuItem.onMouseOver = true;
    }

    onMouseOut() {
        this.menuItem.onMouseOver = false;
    }
}