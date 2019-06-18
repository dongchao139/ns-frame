import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from './DynamicLoadDirective';
import {NsComponent} from './NsComponent';
import {MenuService} from './MenuService';
import {MenuItem, NavTabItem, NsMenu} from '../ns-menu-module/NsMenuConfig';
import {FormConfig} from '../ns-form-module/FormConfig';
import {NsFormComponent} from '../ns-form-module/components/NsFormComponent';
import * as $ from 'jquery';

@Component({
    selector: 'home',
    template: `
        <div class="main-container">
            <header class="header-6">

            </header>
            <header class="header-6 sub-header">
                <ns-menu [menuList]='menus.data' (clickMenu)='loadComponentByMenu($event)'></ns-menu>
            </header>
            <nav class="subnav" [class.active]="active">
                <a href="javascript:void(0);" *ngFor="let tab of tabs" class="item"
                   [class.active]="tab.active" (click)="setActive(tab)">
                    {{ tab.title }}
                    <span [class.tabclose]="tab.active"
                          (click)="closetab(tab)">X</span>
                </a>
            </nav>
            <div style='clear:both'></div>
            <div class="content-container">
                <div class="content-area">
                    <ns-tab *ngFor="let tab of tabs" [tabItem]="tab"></ns-tab>
                    <ng-template dynamic-load></ng-template>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

    @ViewChild(DynamicLoadDirective, {static: true})
    dynamicComponent: DynamicLoadDirective;
    menus: NsMenu;
    active: boolean;
    tabs: NavTabItem[];

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private menuService: MenuService) {
        this.tabs = [];
    }

    setActive(tab: NavTabItem) {
        this.tabs.forEach((t) => t.active = false);
        //切换tab页时,记录锚点路由
        location.hash = tab.url;
        tab.active = true;
    }

    closetab(tab: NavTabItem) {
        //关闭tab页
        var index = this.tabs.indexOf(tab);
        if (index > -1) {
            this.tabs.splice(index, 1);
        }
        var activeNum = this.tabs.filter(tab => tab.active).length;
        if (activeNum == 0) {
            var number = this.tabs.length - 1;
            if (number >= 0) {
                this.tabs[number].active = true;
                //切换tab页时,记录锚点路由
                location.hash = this.tabs[number].url;
            }
        }
    }

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
            this.addTab(formConfig.tabItem);
            this.loadComponent(component);
        } else {
            let viewContainerRef = this.dynamicComponent.viewContainerRef;
            viewContainerRef.clear();
        }
    }

    loadComponentByMenu(menuItem: MenuItem) {
        var formConfig: FormConfig = this.menuService.getComponentConfig(menuItem.url);
        var component: NsComponent<FormConfig> = new NsComponent(NsFormComponent, formConfig);
        //记录锚点路由
        location.hash = menuItem.url;
        this.addTab(formConfig.tabItem);
        this.loadComponent(component);
    }

    addTab(tabItem: NavTabItem) {
        //打开tab页
        if (this.tabs.filter(tab => tab.title == tabItem.title).length == 0) {
            this.tabs.push(tabItem);
        }
        this.tabs.forEach(tab => tab.active = false);
        var navTabItem = this.tabs.filter(tab => tab.title == tabItem.title)[0];
        navTabItem.active = true;
    }

    loadComponent(nsComponent: NsComponent<any>) {
        /*let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<DynamicComponent>componentRef.instance).data = nsComponent.data;*/
    }
}
