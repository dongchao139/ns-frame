import {Injectable} from "@angular/core";
import {MenuItem, NsMenu} from "../ns-basic-module/config/NsMenuConfig";
import {NsMenuComponent} from "./components/NsMenuComponent";
import {MenuService} from "../app-common-directory/MenuService";

@Injectable()
export class NsErpMenuService {
    constructor(private menuService: MenuService) {

    }

    getMenus(): NsMenu {
        var menus: MenuItem[] = this.menuService.getMenus();
        return new NsMenu(NsMenuComponent, menus);
    }
}
