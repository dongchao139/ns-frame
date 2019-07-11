import {MenuItem, NavTabItem, NsMenu} from '../../ns-menu-module/NsMenuConfig';
import {NsMenuComponent} from "../../ns-menu-module/components/NsMenuComponent";
import {FormConfig, FormItemConfig, FormItemType, SelectConfig} from "../../ns-form-module/FormConfig";
import {Injectable} from '@angular/core';
import {NsComponent} from "../components/NsComponent";
import {NsFormComponent} from "../../ns-form-module/components/NsFormComponent";

@Injectable()
export class MenuService {

    getMenus(): NsMenu {
        let menus: MenuItem[] = [];
        let childMenuList1: MenuItem[] = [];
        let grandMenuList1: MenuItem[] = [];
        grandMenuList1.push(new MenuItem('菜单a', '/menu1/menu1/menu1', 3));
        grandMenuList1.push(new MenuItem('菜单b', '/menu1/menu1/menu2', 3));
        grandMenuList1.push(new MenuItem('菜单c', '/menu1/menu1/menu3', 3));
        childMenuList1.push(new MenuItem('菜单1', '/menu1/menu1', 2, grandMenuList1));


        let greatgrandMenuList2: MenuItem[] = [];
        greatgrandMenuList2.push(new MenuItem('菜单.', '/menu-1/menu1/menu-a', 4));
        greatgrandMenuList2.push(new MenuItem('菜单..', '/menu-1/menu1/menu-b', 4));
        greatgrandMenuList2.push(new MenuItem('菜单...', '/menu-1/menu1/menu-c', 4));

        let grandMenuList2: MenuItem[] = [];
        grandMenuList2.push(new MenuItem('菜单d', '/menu-1/menu1/menu-a', 3, greatgrandMenuList2));
        grandMenuList2.push(new MenuItem('菜单e', '/menu-1/menu1/menu-b', 3));
        grandMenuList2.push(new MenuItem('菜单f', '/menu-1/menu1/menu-c', 3));

        childMenuList1.push(new MenuItem('菜单2', '/menu-1/menu2', 2, grandMenuList2));
        childMenuList1.push(new MenuItem('菜单3', '/menu-1/menu3', 2));
        let childMenuList2: MenuItem[] = [];
        childMenuList2.push(new MenuItem('菜单1', '/menu-2/menu1', 2));
        childMenuList2.push(new MenuItem('菜单2', '/menu-2/menu2', 2));
        childMenuList2.push(new MenuItem('菜单3', '/menu-2/menu3', 2));
        let childMenuList3: MenuItem[] = [];
        childMenuList3.push(new MenuItem('菜单1', '/menu-3/menu1', 2));
        childMenuList3.push(new MenuItem('菜单2', '/menu-3/menu2', 2));
        childMenuList3.push(new MenuItem('菜单3', '/menu-3/menu3', 2));

        menus.push(new MenuItem('菜单一', '/menu1', 1, childMenuList1));
        menus.push(new MenuItem('菜单二', '/menu2', 1, childMenuList2));
        menus.push(new MenuItem('菜单三', '/menu3', 1, childMenuList3));

        return new NsMenu(NsMenuComponent, menus);
    }

    getComponentConfig(url: string): NsComponent<any> {
        var text1 = new FormItemConfig({
            id: 'text-1',
            label: '姓名',
            key: 'name',
            value: '张三',
            type: FormItemType.TEXT
        });
        var select1 = new SelectConfig({
            id: 'select-1',
            label: '性别',
            key: 'gender',
            value:1,
            type:FormItemType.SELECT,
            multiple:false,
            textField:'name',
            valueField:'id',
            subdata:[
                {
                    key: 1,
                    value:'男'
                },{
                    key:2,
                    value:'女'
                }
            ]
        });
        var data: FormConfig = {
            id: 'form-' + url,
            title: url,
            action: url.substr(url.lastIndexOf('/')),
            items: [
                text1, select1
            ]
        };
        var navTabItem: NavTabItem = {
            title: url.substr(url.lastIndexOf('/')),
            url: url
        };
        return new NsComponent(NsFormComponent, data, navTabItem);
    }
}
