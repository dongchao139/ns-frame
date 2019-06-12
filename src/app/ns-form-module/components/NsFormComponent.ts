import { Component, OnInit, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { FormItemDirective } from "../directives/FormItemDirective";
import { NsSelectComponent } from "./NsSelectComponent";
import { FormItemType, NsSelect } from "../FormConfig";
import { MenuItem, NsMenu } from "../../ns-menu-module/NsMenuConfig";
import { NsMenuComponent } from "../../ns-menu-module/components/NsMenuComponent";

@Component({
    selector: 'ns-form',
    templateUrl: './ns-form.html'
})
export class NsFormComponent implements OnInit {

    @ViewChild(FormItemDirective)
    formItem: FormItemDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    loadMenuComponent() {
        var menus: MenuItem[] = [];
        var childMenuList1: MenuItem[] = [];
        var grandMenuList1: MenuItem[] = [];
        grandMenuList1.push(new MenuItem('菜单一','/menu1/menu1/menu1'));
        grandMenuList1.push(new MenuItem('菜单二','/menu1/menu1/menu2'));
        grandMenuList1.push(new MenuItem('菜单三','/menu1/menu1/menu3'));
        childMenuList1.push(new MenuItem('菜单一','/menu1/menu1',grandMenuList1));
        
        childMenuList1.push(new MenuItem('菜单二','/menu1/menu2'));
        childMenuList1.push(new MenuItem('菜单三','/menu1/menu3'));
        var childMenuList2: MenuItem[] = [];
        childMenuList2.push(new MenuItem('菜单一','/menu2/menu1'));
        childMenuList2.push(new MenuItem('菜单二','/menu2/menu2'));
        childMenuList2.push(new MenuItem('菜单三','/menu2/menu3'));
        var childMenuList3: MenuItem[] = [];
        childMenuList3.push(new MenuItem('菜单一','/menu3/menu1'));
        childMenuList3.push(new MenuItem('菜单二','/menu3/menu2'));
        childMenuList3.push(new MenuItem('菜单三','/menu3/menu3'));

        menus.push(new MenuItem('菜单一','/menu1',childMenuList1));
        menus.push(new MenuItem('菜单二','/menu2',childMenuList2));
        menus.push(new MenuItem('菜单三','/menu3',childMenuList3));

        var nsMenu: NsMenu = new NsMenu(NsMenuComponent, menus);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsMenu.component);

        let viewContainerRef = this.formItem.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<NsMenuComponent>componentRef.instance).menuList = nsMenu.data;
    }

    loadSelectComponent() {
        var nsSelect = new NsSelect(NsSelectComponent, {
            id: 'select-demo',
            label: 'select-demo',
            type: FormItemType.SELECT,
            textField: 'name',
            valueField: 'id',
            multiple: false,
            width: 4,
            subdata: [
                {
                    id: 1,
                    value: 'text1'
                }, {
                    id: 2,
                    value: 'text2'
                }
            ]
        });
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsSelect.component);

        let viewContainerRef = this.formItem.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<NsSelectComponent<number>>componentRef.instance).config = nsSelect.data;
    }

    ngOnInit(): void {

    }
}