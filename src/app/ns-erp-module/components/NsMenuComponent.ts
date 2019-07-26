import {MenuItem} from '../../app-base-module/config/NsMenuConfig';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'ns-menu',
    template: `
        <ul [class.toplevel]='topLevel()' [class.secondlevel]='secondLevel()'
            [class.greeterlevel]='!topLevel() && !secondLevel()'>
            <ns-menu-item *ngFor="let oneMenu of menuList" [menuItem]="oneMenu"
                          (clickEvent)='onClick($event)'>
            </ns-menu-item>
        </ul>
    `,
    styleUrls: ['../styles/ns-menu.css']
})
export class NsMenuComponent {

    @Input() menuList: MenuItem[];
    @Output() clickMenu: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

    constructor() {
    }

    topLevel(): boolean {
        if (this.menuList && this.menuList.length > 0) {
            return this.menuList[0].level == 1;
        }
        return false;
    }

    secondLevel(): boolean {
        if (this.menuList && this.menuList.length > 0) {
            return this.menuList[0].level == 2;
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
        <li (mouseover)='onMouseOver()' (mouseout)='onMouseOut()'
            [class.toplevel]='menuItem.level==1' [class.secondlevel]='menuItem.level==2'
            [class.greeterlevel]='menuItem.level>2'>
            <a (click)='onClick(null)' href="javascript:void(0);">{{menuItem.menuName}}
                <span *ngIf="menuItem.children && menuItem.level> 1" class="dropdown-arrow">\></span>
            </a>
            <ns-menu *ngIf='menuItem.children' [menuList]='menuItem.children'
                     [hidden]='!menuItem.onMouseOver' (clickMenu)="onClick($event)">
            </ns-menu>
        </li>
    `,
    styleUrls: ['../styles/ns-menu.css']
})
export class MenuItemComponent {
    @Input() menuItem: MenuItem;
    @Output() clickEvent: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

    onClick(menuItem: MenuItem) {
        if (menuItem && !menuItem.children) {
            this.clickEvent.emit(menuItem);
        } else if(!this.menuItem.children) {
            this.clickEvent.emit(this.menuItem);
        }
    }

    onMouseOver() {
        this.menuItem.onMouseOver = true;
    }

    onMouseOut() {
        this.menuItem.onMouseOver = false;
    }
}
