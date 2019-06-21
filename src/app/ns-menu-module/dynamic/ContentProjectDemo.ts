import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DynamicComponent} from "../../home/NsComponent";
import {Subject} from "rxjs";

/**
 * 动态组件可以再创建动态组件
 */
@Component({
    selector: 'content-project-demo',
    template: `
        <a (click)="doChange()" style="text-decoration: none" href="javascript:void(0);">
            <span *ngIf="data">
                injected content: {{data}}
            </span>
        </a>
    `
})
export class ContentProjectDemo implements DynamicComponent, OnInit{
    data: any;
    event:Subject<any>;

    constructor(public cd:ChangeDetectorRef) {

    }

    ngOnInit(): void {
        console.log("ngOnInit invoked");

    }

    doChange() {
        this.data = '';
        if (this.event) {
            console.log("send message");
            this.event.next("abc");
        }
    }
}
