import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[dynamic-load]',
})
export class DynamicLoadDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
