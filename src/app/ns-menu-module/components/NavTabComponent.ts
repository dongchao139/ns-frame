import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {NavTabItem} from '../NsMenuConfig';
import {DynamicLoadDirective} from '../../home/DynamicLoadDirective';
import {DynamicComponent, NsComponent} from '../../home/NsComponent';

@Component({
  selector: 'ns-tab',
  template: `
    <p [hidden]="!tabItem.active">{{tabItem.content}}</p>
    <ng-template dynamic-load></ng-template>
  `
})
export class NavTabComponent implements OnInit{
  @Input()
  tabItem: NavTabItem;
  @ViewChild(DynamicLoadDirective, { static: true })
  dynamicComponent: DynamicLoadDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

  }

  loadComponent(nsComponent: NsComponent<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsComponent.component);
    let viewContainerRef = this.dynamicComponent.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicComponent>componentRef.instance).data = nsComponent.data;
  }
}
