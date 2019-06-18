import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from './DynamicLoadDirective';
import {DynamicComponent, NsComponent} from './NsComponent';
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
          </a>
        </nav><div style='clear:both'></div>
      <ns-tab *ngFor="let tab of tabs" [tabItem]="tab"></ns-tab>
      <div class="content-container">
            <div class="content-area">
                <ng-template dynamic-load></ng-template>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .main-container, .main-container header {
        flex: 0 0 1.5rem;
    }
    .header.header-6, header.header-6 {
        background-color: rgb(71,111,154);
    }
    .sub-header {
        border-top:1px solid rgb(47,73,102);
        padding-left: 1.5%;
        padding-right: 1.5%;
    }
    .main-container .sub-nav, .main-container .subnav {
        background-color: #ddd;
        flex: 0 0 1.2rem;
    }
    .content-container {
        padding-left: 1.5% !important;
        padding-right: 1.5% !important;
    }
    .subnav {
      justify-content: left;
    } 
    .subnav > a {
      margin-left: 1rem;
      text-decoration: none;
    }  
    `]
})
export class HomeComponent implements OnInit {

    @ViewChild(DynamicLoadDirective, { static: true })
    dynamicComponent: DynamicLoadDirective;
    menus: NsMenu;
    active: boolean;
    tabs: NavTabItem[];

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private menuService: MenuService) {
      //TODO 点击菜单时,动态创建
      this.tabs = [
        { title: 'About', content: 'This is the About tab' },
        { title: 'Blog', content: 'This is our blog' },
        { title: 'Contact us', content: 'Contact us here' },
      ];
    }

    setActive(tab: NavTabItem) {
      this.tabs.forEach((t) => t.active = false);
      tab.active = true;
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
