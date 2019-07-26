import {Injectable} from "@angular/core";
import {MenuItem, NsMenu} from "../app-base-module/config/NsMenuConfig";
import {NsMenuComponent} from "./components/NsMenuComponent";
import {AbstractMenuService} from "../app-base-module/abstract-services/AbstractMenuService";

@Injectable()
export class ErpMenuService {
    constructor(private menuService: AbstractMenuService) {

    }

    getMenus(): NsMenu {
        var menus: MenuItem[] = this.menuService.getMenus();
        return new NsMenu(NsMenuComponent, menus);
    }
}
