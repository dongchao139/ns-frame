import {Injectable} from "@angular/core";
import {MenuItem, NsMenu} from "../app-common-directory/config/NsMenuConfig";
import {NsMenuComponent} from "./components/NsMenuComponent";
import {MenuService} from "../app-common-directory/service/MenuService";

@Injectable()
export class ErpMenuService {
    constructor(private menuService: MenuService) {

    }

    getMenus(): NsMenu {
        var menus: MenuItem[] = this.menuService.getMenus();
        return new NsMenu(NsMenuComponent, menus);
    }
}
