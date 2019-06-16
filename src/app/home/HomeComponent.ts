import { Component, ViewChild, ComponentFactoryResolver, OnInit, OnChanges, Injector } from "@angular/core";
import { DynamicLoadDirective } from "./DynamicLoadDirective";
import { NsComponent, DynamicComponent } from "./NsComponent";
import { MenuService } from "./MenuService";
import { NsMenu, MenuItem } from "../ns-menu-module/NsMenuConfig";
import { FormConfig } from "../ns-form-module/FormConfig";
import { NsFormComponent } from "../ns-form-module/components/NsFormComponent";
import * as $ from 'jquery'

@Component({
    selector: 'home',
    template: `
    <nav>
        <ns-menu [menuList]='menus.data' (clickMenu)='loadComponentByMenu($event)'></ns-menu>
    </nav><div style='clear:both'></div>
    <ng-template dynamic-load></ng-template>
    `
})
export class HomeComponent implements OnInit {

    @ViewChild(DynamicLoadDirective)
    dynamicComponent: DynamicLoadDirective;
    menus: NsMenu;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private menuService: MenuService) { }

    ngOnInit(): void {
        this.menus = this.menuService.getMenus();
        //打开页面时,读取hash路由并加载组件
        this.loadComponentByHash();
        var self = this;
        //监听浏览器前进/后退事件,读取hash路由并加载组件
        $(window).on('hashchange', function () {
            self.loadComponentByHash();
        });
    }

    loadComponentByHash() {
        var url = location.hash.substr(1);
        if (url) {
            var formConfig: FormConfig = this.menuService.getComponentConfig(url);
            var component: NsComponent<FormConfig> = new NsComponent(NsFormComponent, formConfig);
            this.loadComponent(component);
        }
    }

    loadComponentByMenu(menuItem: MenuItem) {
        var formConfig: FormConfig = this.menuService.getComponentConfig(menuItem.url);
        var component: NsComponent<FormConfig> = new NsComponent(NsFormComponent, formConfig);
        //记录锚点路由
        location.hash = menuItem.url;
        this.loadComponent(component);
    }

    loadComponent(nsComponent: NsComponent<any>) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<DynamicComponent>componentRef.instance).data = nsComponent.data;
    }
}