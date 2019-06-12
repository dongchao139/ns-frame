import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[form-item]',
})
export class FormItemDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}