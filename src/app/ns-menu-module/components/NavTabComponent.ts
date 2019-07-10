import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicLoadDirective} from '../directives/DynamicLoadDirective';
import {NsComponent} from "../../ns-basic-page/components/NsComponent";

@Component({
    selector: 'ns-tab',
    template: `
        <p [hidden]="!nsForm.tabItem.active">
            <ng-template dynamic-load></ng-template>
        </p>
    `
})
export class NavTabComponent implements OnInit {
    @Input()
    nsForm: NsComponent<any>;
    @ViewChild(DynamicLoadDirective, {static: true})
    dynamicComponent: DynamicLoadDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector) {
}

    ngOnInit(): void {
        this.loadComponent(this.nsForm);
    }

    /**
     * 根据传入的NsComponent动态创建组件,保存在当前的tab页中
     *
     * ComponentFactoryResolver  组件工厂解析器,负责创建具体组件对应的组件工厂,通过依赖注入获得
     * Injector  依赖注入器,相当于ApplicationContext,通过依赖注入获得
     * ComponentFactory  组件工厂,每一个组件对应一个组件工厂
     * ViewContainerRef  视图容器的引用, 通过自定义指令获得
     * ComponentRef  组件的引用
     *
     * @param nsForm
     */
    loadComponent(nsForm: NsComponent<any>) {
        //创建动态元素
        let componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(nsForm.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        var componentRef= viewContainerRef.createComponent(componentFactory, 0, this.injector);
        componentRef.instance.data = nsForm.data;
    }
}
