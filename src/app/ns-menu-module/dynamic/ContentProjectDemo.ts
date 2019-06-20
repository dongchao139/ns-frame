import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {DynamicComponent} from "../../home/NsComponent";

@Component({
    selector: 'content-project-demo',
    template: `
        <a style="text-decoration: none" href="javascript:void(0);">
            injected content: {{data}}
        </a>
    `
})
export class ContentProjectDemo implements DynamicComponent{
    @Input()
    data: any;
    constructor(public cd:ChangeDetectorRef) {

    }
}
