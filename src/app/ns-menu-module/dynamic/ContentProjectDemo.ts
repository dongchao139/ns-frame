import {ChangeDetectorRef, Component} from "@angular/core";
import {DynamicComponent} from "../../home/NsComponent";

/**
 * 动态内容投影的组件,生命周期函数不会被调用,默认也无法进行变更检测
 * 但可以正常进行数据绑定和方法绑定,指令也可以正常起作用
 * 可以在外层组件的变更检测时,调用当前组件的变更检测方法
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
export class ContentProjectDemo implements DynamicComponent{
    data: any;

    constructor(public cd:ChangeDetectorRef) {

    }

    doChange() {
        this.data = '';
    }
}
