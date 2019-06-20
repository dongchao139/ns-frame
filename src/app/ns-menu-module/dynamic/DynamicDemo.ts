import {Component, DoCheck, OnInit} from "@angular/core";
import {DynamicComponent} from "../../home/NsComponent";
import * as XLSX from "xlsx";
import {WorkBook, WorkSheet} from "xlsx";
import {ContentProjectDemo} from "./ContentProjectDemo";

/**
 * 由viewContainerRef创建的组件, 它的声明周期函数可以被正常调用,也可以正常的变更检测
 * 但无法通过@ContentChildren获取投影进来的组件
 * 也无法是有@ViewChild
 */
@Component({
    selector: 'dynamic-demo',
    template: `
        <p>dynamic demo: {{data}}
            <br/>
            <ng-content></ng-content>
        </p>
    `
})
export class DynamicDemo implements DynamicComponent, OnInit, DoCheck {
    data: any;
    contentChild: ContentProjectDemo;

    ngOnInit(): void {
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
        this.contentChild.cd.detectChanges();
    }

}
