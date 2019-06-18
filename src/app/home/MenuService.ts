import {MenuItem, NsMenu} from '../ns-menu-module/NsMenuConfig';
import {NsMenuComponent} from "../ns-menu-module/components/NsMenuComponent";
import {FormConfig, FormSize, HttpMethod} from "../ns-form-module/FormConfig";
import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {
    getMenus(): NsMenu {
        var menus: MenuItem[] = [];
        var childMenuList1: MenuItem[] = [];
        var grandMenuList1: MenuItem[] = [];
        grandMenuList1.push(new MenuItem('菜单a', '/menu1/menu1/menu1', 3));
        grandMenuList1.push(new MenuItem('菜单b', '/menu1/menu1/menu2', 3));
        grandMenuList1.push(new MenuItem('菜单c', '/menu1/menu1/menu3', 3));
        childMenuList1.push(new MenuItem('菜单1', '/menu1/menu1', 2, grandMenuList1));


        var greatgrandMenuList2: MenuItem[] = [];
        greatgrandMenuList2.push(new MenuItem('菜单.', '/menu-1/menu1/menu-a', 4));
        greatgrandMenuList2.push(new MenuItem('菜单..', '/menu-1/menu1/menu-b', 4));
        greatgrandMenuList2.push(new MenuItem('菜单...', '/menu-1/menu1/menu-c', 4));

        var grandMenuList2: MenuItem[] = [];
        grandMenuList2.push(new MenuItem('菜单d', '/menu-1/menu1/menu-a', 3, greatgrandMenuList2));
        grandMenuList2.push(new MenuItem('菜单e', '/menu-1/menu1/menu-b', 3));
        grandMenuList2.push(new MenuItem('菜单f', '/menu-1/menu1/menu-c', 3));

        childMenuList1.push(new MenuItem('菜单2', '/menu-1/menu2', 2, grandMenuList2));
        childMenuList1.push(new MenuItem('菜单3', '/menu-1/menu3', 2));
        var childMenuList2: MenuItem[] = [];
        childMenuList2.push(new MenuItem('菜单1', '/menu-2/menu1', 2));
        childMenuList2.push(new MenuItem('菜单2', '/menu-2/menu2', 2));
        childMenuList2.push(new MenuItem('菜单3', '/menu-2/menu3', 2));
        var childMenuList3: MenuItem[] = [];
        childMenuList3.push(new MenuItem('菜单1', '/menu-3/menu1', 2));
        childMenuList3.push(new MenuItem('菜单2', '/menu-3/menu2', 2));
        childMenuList3.push(new MenuItem('菜单3', '/menu-3/menu3', 2));

        menus.push(new MenuItem('菜单一', '/menu1', 1, childMenuList1));
        menus.push(new MenuItem('菜单二', '/menu2', 1, childMenuList2));
        menus.push(new MenuItem('菜单三', '/menu3', 1, childMenuList3));

        var nsMenu: NsMenu = new NsMenu(NsMenuComponent, menus);
        return nsMenu;
    }

    getComponentConfig(url: string): FormConfig {
        var FormConfig: FormConfig = {
            id: 'form-1' + url,
            title: 'form demo ' + url,
            size: FormSize.MIDDLE,
            method: HttpMethod.GET,
            action: url,
            itemConfigs: [],
            tabItem: {
              title: url.substr(url.lastIndexOf('/')),
              url: url,
              content: 'demo content' + url,
              active: false
            }
        };
        return FormConfig;
    }
}
