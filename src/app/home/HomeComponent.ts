import {Component, ComponentFactoryResolver, Injector, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from '../ns-menu-module/directives/DynamicLoadDirective';
import {MenuService} from './MenuService';
import {MenuItem, NsMenu} from '../ns-menu-module/NsMenuConfig';
import {FormConfig} from '../ns-form-module/FormConfig';
import * as $ from "jquery";

@Component({
    selector: 'home',
    template: `
        <div class="main-container">
            <header class="header-6">

            </header>
            <header class="header-6 sub-header">
                <ns-menu [menuList]='menus.data' (clickMenu)='loadTabByMenu($event)'></ns-menu>
            </header>
            <nav class="subnav" [class.active]="active">
                <a href="javascript:void(0);" *ngFor="let form of forms" class="item"
                   [class.active]="form.tabItem.active" (click)="setActive(form)">
                    {{ form.tabItem.title }}
                    <span [class.tabclose]="form.tabItem.active" (click)="closeTab(form)">\u2716</span>
                </a>
            </nav>
            <div style='clear:both'></div>
            <div class="content-container">
                <div class="content-area">
                    <ns-tab *ngFor="let form of forms" [formConfig]="form"></ns-tab>
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
    forms: FormConfig[];

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector, private menuService: MenuService) {
        this.forms = [];
    }

    ngOnInit(): void {
        this.menus = this.menuService.getMenus();
        //打开页面时,读取hash路由并加载组件
        this.loadTabByHash();
        let self = this;
        //监听浏览器前进/后退事件,读取hash路由并加载组件
        $(window).on('hashchange', function () {
            self.loadTabByHash();
        });
    }

    openTab(formConfig: FormConfig) {
        //打开tab页
        if (this.forms.filter(form => form.id == formConfig.id).length == 0) {
            this.forms.push(formConfig);
        }
        this.setActive(formConfig);
    }

    setActive(formConfig: FormConfig) {
        this.forms.forEach((f) => f.tabItem.active = false);
        //切换tab页时,记录锚点路由
        location.hash = formConfig.tabItem.url;
        var filterElement = this.forms.filter(f => f.id == formConfig.id)[0];
        filterElement.tabItem.active = true;
    }

    closeTab(formConfig: FormConfig) {
        //关闭tab页
        let index = this.forms.indexOf(formConfig);
        if (index > -1) {
            this.forms.splice(index, 1);
        }
        let activeNum = this.forms.filter(form => form.tabItem.active).length;
        if (activeNum == 0) {
            let number = this.forms.length - 1;
            if (number >= 0) {
                this.forms[number].tabItem.active = true;
                //切换tab页时,记录锚点路由
                location.hash = this.forms[number].tabItem.url;
            }
        }
    }

    loadTabByHash() {
        let url = location.hash.substr(1);
        if (url) {
            let formConfig: FormConfig = this.menuService.getComponentConfig(url);
            this.openTab(formConfig);
        }
    }

    loadTabByMenu(menuItem: MenuItem) {
        let formConfig: FormConfig = this.menuService.getComponentConfig(menuItem.url);
        //记录锚点路由
        location.hash = menuItem.url;
        this.openTab(formConfig);
    }

}
