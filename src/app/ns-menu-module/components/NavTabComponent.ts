import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from '../directives/DynamicLoadDirective';
import {NsComponent} from '../../home/NsComponent';
import {FormConfig} from "../../ns-form-module/FormConfig";
import {MenuService} from "./MenuService";
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
     * 动态创建组件示例
     *
     * ComponentFactoryResolver  组件工厂解析器,负责创建具体组件对应的组件工厂,通过依赖注入获得
     * Injector  依赖注入器,相当于ApplicationContext,通过依赖注入获得
     * ComponentFactory  组件工厂,每一个组件对应一个组件工厂
     * ViewContainerRef  视图容器的引用, 通过自定义指令获得
     * ComponentRef  组件的引用
     *
     * @param formConfig
     */
    loadComponent(formConfig: FormConfig) {
        //创建动态元素
        let demoComponent = new NsComponent(DynamicDemo);
        let demoComponentFactory = this.componentFactoryResolver
            .resolveComponentFactory(demoComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        var dynamicComponentCrf= viewContainerRef.createComponent(demoComponentFactory, 0, this.injector);
        dynamicComponentCrf.instance.data = "demo dynamic content " + formConfig.action;
    }
}
