import {Component} from "@angular/core";
import {DynamicComponent} from "../home/NsComponent";

@Component({
    selector: 'content-project-demo',
    template: `
        <a>injected content</a>
    `
})
export class ContentProjectDemo implements DynamicComponent{
    data: any;
}
