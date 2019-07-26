import {Component, ComponentFactoryResolver, Injector, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MenuItem, NsMenu} from '../../app-base-module/config/NsMenuConfig';
import {NsComponent} from "../../app-base-module/NsComponent";
import {ErpMenuService} from "../ErpMenuService";
import * as $ from "jquery";
import {AbstractMenuService} from "../../app-base-module/abstract-services/AbstractMenuService";

@Component({
    selector: 'home',
    template: `
        <div class="main-container">
            <header class="header-6">
                
            </header>
            <header class="header-6 sub-header">
                <ns-menu [menuList]='menus.data' (clickMenu)='loadTabByMenu($event)'></ns-menu>
            </header>
            <nav class="subnav">
                <a href="javascript:void(0);" *ngFor="let nsForm of forms" class="item"
                   [class.active]="nsForm.tabItem.active" (click)="setActive(nsForm)">
                    {{ nsForm.tabItem.title }}
                    <span [class.tabclose]="nsForm.tabItem.active" (click)="closeTab(nsForm)">\u2716</span>
                </a>
            </nav>
            <div style='clear:both'></div>
            <div class="content-container">
                <div class="content-area">
                    <ns-tab *ngFor="let nsForm of forms" [nsForm]="nsForm"></ns-tab>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['../styles/home.css']
})
export class HomeComponent implements OnInit, OnChanges {

    menus: NsMenu;
    forms: NsComponent<any>[];  //每一个tab页中包含一个组件

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector, private menuService: ErpMenuService,
                private baseMenuService: AbstractMenuService) {
        this.forms = [];
        if (baseMenuService.redirectHash) {
            window.location.hash = baseMenuService.redirectHash;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {

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

    openTab(nsForm: NsComponent<any>) {
        //打开tab页
        if (this.forms.filter(f => f.data.id == nsForm.data.id).length == 0) {
            this.forms.push(nsForm);
        }
        this.setActive(nsForm);
    }

    setActive(nsForm: NsComponent<any>) {
        this.forms.forEach(f => f.tabItem.active = false);
        //切换tab页时,记录锚点路由
        location.hash = nsForm.tabItem.url;
        var filterElement = this.forms.filter(f => f.data.id == nsForm.data.id)[0];
        filterElement.tabItem.active = true;
    }

    closeTab(nsForm: NsComponent<any>) {
        //关闭tab页
        let index = this.forms.indexOf(nsForm);
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
            } else {
                location.hash = '';
            }
        }
    }

    loadTabByHash() {
        if (location.hash && location.hash != '#undefined') {
            let nsForm: NsComponent<any> = this.baseMenuService.getComponentConfig(location.hash.substr(1));
            this.openTab(nsForm);
        }
    }

    loadTabByMenu(menuItem: MenuItem) {
        let nsForm: NsComponent<any> = this.baseMenuService.getComponentConfig(menuItem.url);
        //记录锚点路由
        location.hash = menuItem.url;
    }

}
