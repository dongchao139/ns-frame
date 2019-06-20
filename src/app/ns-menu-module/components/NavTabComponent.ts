import {Component, ComponentFactoryResolver, ComponentRef, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from '../directives/DynamicLoadDirective';
import {DynamicComponent, NsComponent} from '../../home/NsComponent';
import {FormConfig} from "../../ns-form-module/FormConfig";
import {MenuService} from "./MenuService";
import {ContentProjectDemo} from "../dynamic/ContentProjectDemo";
import {DynamicDemo} from "../dynamic/DynamicDemo";

@Component({
    selector: 'ns-tab',
    template: `
        <p [hidden]="!formConfig.tabItem.active">
            {{formConfig.tabItem.content}}
            <br/>
            <ng-template dynamic-load></ng-template>
        </p>
    `
})
export class NavTabComponent implements OnInit {
    @Input()
    formConfig: FormConfig;
    @ViewChild(DynamicLoadDirective, {static: true})
    dynamicComponent: DynamicLoadDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector, private menuService: MenuService) {
    }

    ngOnInit(): void {
        this.loadComponent(this.formConfig);
    }

    /**
     * 动态创建组件,同时添加动态内容投影示例
     *
     * ComponentFactoryResolver  组件工厂解析器,负责创建具体组件对应的组件工厂,通过依赖注入获得
     *      相当于DefaultListableBeanDefinitionDocumentReader
     * Injector  依赖注入器,相当于ApplicationContext,通过依赖注入获得
     * ComponentFactory  组件工厂,每一个组件对应一个组件工厂.相当于FactoryBean
     * ComponentRef  组件的引用, 可以用viewContainerRef创建,也可以用ComponentFactory创建
     * ChangeDetectorRef 变更检测器, 每个组件都有自己的变更检测器
     * result: any[][]  投影元素的dom对象
     * ViewContainerRef  视图容器的引用, 通过自定义指令获得
     *
     * @param formConfig
     */
    loadComponent(formConfig: FormConfig) {
        //创建动态内容投影元素
        let contentProjectComponent = new NsComponent(ContentProjectDemo);
        let contentProjectFactory = this.componentFactoryResolver
            .resolveComponentFactory(contentProjectComponent.component);
        let crf: ComponentRef<DynamicComponent> = contentProjectFactory.create(this.injector);
        crf.instance.data = "demo content " + formConfig.title;
        (<ContentProjectDemo>crf.instance).cd.detectChanges();
        let result: any[][] = [[crf.location.nativeElement]];

        //创建动态元素
        let demoComponent = new NsComponent(DynamicDemo);
        let demoComponentFactory = this.componentFactoryResolver
            .resolveComponentFactory(demoComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        var dynamicComponentComponentRef = viewContainerRef
            .createComponent(demoComponentFactory, 0, this.injector, result);
        dynamicComponentComponentRef.instance.data = "demo dynamic content " + formConfig.action;
    }
}
