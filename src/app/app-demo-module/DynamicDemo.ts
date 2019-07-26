import {Component, ComponentFactoryResolver, Injector, ViewChild} from '@angular/core';
import {DynamicComponent, NsComponent} from '../app-base-module/NsComponent';
import {ContentProjectDemo} from "./ContentProjectDemo";
import {DynamicLoadDirective} from "../app-base-module/directive/DynamicLoadDirective";

/**
 * 由viewContainerRef创建的组件, 它的生命周期函数可以被正常调用,也可以正常的变更检测
 * 但无法通过@ContentChildren获取投影进来的组件
 */
@Component({
    selector: 'dynamic-demo',
    template: `
        <p (click)="doClick()">dynamic demo: {{data}}
            <br/>
            <ng-template dynamic-load></ng-template>
        </p>
    `
})
export class DynamicDemo implements DynamicComponent {
    data: any;
    @ViewChild(DynamicLoadDirective, {static: true})
    dynamicComponent: DynamicLoadDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector) { }

    doClick() {
        let demoComponent = new NsComponent(ContentProjectDemo);
        let demoComponentFactory = this.componentFactoryResolver
            .resolveComponentFactory(demoComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        var dynamicComponentCrf= viewContainerRef.createComponent(demoComponentFactory, 0, this.injector);
        dynamicComponentCrf.instance.data = "app-demo-module app-demo-module content ";
    }

}
