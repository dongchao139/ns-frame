import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "../NsMenuConfig";

@Component({
    selector: 'ns-menu',
    template: `
    <ul [class.toplevel]='topLevel()' [class.secondlevel]='secondLevel()' 
        [class.greeterlevel]='greaterLevel()'>
        <ns-menu-item *ngFor="let oneMenu of menuList" [menuItem]="oneMenu"
            (clickEvent)='onClick(oneMenu)'>
        </ns-menu-item>
    </ul>
    `,
    styleUrls: ['../ns-menu.css']
})
export class NsMenuComponent {
    @Input() menuList: MenuItem[];
    @Output() clickMenu: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    constructor() { }

    topLevel(): boolean {
        if (this.menuList && this.menuList.length > 0) {
            return this.menuList[0].level == 1;
        }
        return false;
    }

    secondLevel():boolean {
        if (this.menuList && this.menuList.length > 0) {
            return this.menuList[0].level == 2;
        }
        return false;
    }

    greaterLevel():boolean {
        if (this.menuList && this.menuList.length > 0) {
            return this.menuList[0].level >= 3;
        }
        return false;
    }

    onClick(menuItem: MenuItem) {
        this.clickMenu.emit(menuItem);
    }
}

@Component({
    selector: 'ns-menu-item',
    template: `
    <li (click)='onClick()' (mouseover)='onMouseOver()' (mouseout)='onMouseOut()' 
        [class.toplevel]='menuItem.level==1' [class.secondlevel]='menuItem.level==2' 
        [class.greeterlevel]='menuItem.level>=3'>
        <a href='menuItem.url'>{{menuItem.menuName}}</a>
        <ns-menu *ngIf='menuItem.children' [menuList]='menuItem.children' 
            [hidden]='!menuItem.onMouseOver'>
        </ns-menu>
    </li>
    `,
    styleUrls: ['../ns-menu.css']
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