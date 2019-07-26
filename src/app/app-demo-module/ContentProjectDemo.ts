import {Component, OnInit} from '@angular/core';
import {DynamicComponent} from "../app-base-module/NsComponent";

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

    ngOnInit(): void {
        console.log("ngOnInit invoked");
    }

    doChange() {
        this.data = '';
    }
}
