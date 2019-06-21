import {Component, ComponentFactoryResolver, DoCheck, Injector, OnInit, ViewChild} from '@angular/core';
import {DynamicComponent, NsComponent} from '../../home/NsComponent';
import * as XLSX from "xlsx";
import {WorkBook, WorkSheet} from "xlsx";
import {ContentProjectDemo} from "./ContentProjectDemo";
import {Subject} from "rxjs";
import {DynamicLoadDirective} from '../directives/DynamicLoadDirective';

/**
 * 由viewContainerRef创建的组件, 它的声明周期函数可以被正常调用,也可以正常的变更检测
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
export class DynamicDemo implements DynamicComponent, OnInit, DoCheck {
    data: any;
    contentChild: ContentProjectDemo;
    event:Subject<any>;
    @ViewChild(DynamicLoadDirective, {static: true})
    dynamicComponent: DynamicLoadDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector) { }

    ngOnInit(): void {
        console.log(this.dynamicComponent);
        if (this.event){
            this.event.subscribe(value => {
                console.log("got event: ");
                console.log(value);
            });
        }
        var workSheet: WorkSheet = XLSX.utils.json_to_sheet([
            { S:1, h:2, e:3, e_1:4, t:5, J:6, S_1:7 },
            { S:2, h:3, e:4, e_1:5, t:6, J:7, S_1:8 }
        ], {header:["S","h","e","e_1","t","J","S_1"]});
        var workbook: WorkBook = {
            Sheets: {
                'sheet1': workSheet
            },
            SheetNames: ['sheet1']
        };

        var wb: WorkBook = {
            Sheets: {
                'sheet1': {
                    'A1':{
                        t: 'n',
                        v: 10
                    },
                    'A2':{
                        t: 'n',
                        v: 20
                    },
                    'B1':{
                        t: 'n',
                        v: 30
                    },
                    'B2':{
                        t: 'n',
                        v: 40
                    }
                },
                'sheet2': {},
                'sheet3': {}
            },
            SheetNames: ['sheet1','sheet2','sheet3']
        };
        //XLSX.writeFile(workbook, 'out.xlsx');
    }

    ngDoCheck(): void {
        //父组件变更检测时,调用子组件的变更检测
        //this.contentChild.cd.detectChanges();
    }

    doClick() {
        let demoComponent = new NsComponent(ContentProjectDemo);
        let demoComponentFactory = this.componentFactoryResolver
            .resolveComponentFactory(demoComponent.component);
        let viewContainerRef = this.dynamicComponent.viewContainerRef;
        viewContainerRef.clear();
        var dynamicComponentCrf= viewContainerRef.createComponent(demoComponentFactory, 0, this.injector);
        dynamicComponentCrf.instance.data = "demo dynamic content ";
    }

}
