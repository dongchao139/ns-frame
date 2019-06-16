import { Type } from '@angular/core';

export interface DynamicComponent {
    data: any;
}

export class NsComponent<T> {
    constructor(public component: Type<DynamicComponent>, public data: T) { }
}