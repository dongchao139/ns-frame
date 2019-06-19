import {Component} from "@angular/core";
import {DynamicComponent} from "../home/NsComponent";

@Component({
    selector: 'dynamic-demo',
    template: `
        <p>dynamic demo
            <ng-content></ng-content>
        </p>
    `
})
export class DynamicDemo implements DynamicComponent{
    data: any;

}
