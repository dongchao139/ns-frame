import { SelectConfig } from "../FormConfig";
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ns-select',
    templateUrl: './ns-select.html'
})
export class NsSelectComponent<T> implements OnInit {

    @Input() config: SelectConfig<T>;
    @Output() onChange = new EventEmitter<T>();


    constructor() {

    }

    ngOnInit(): void {

    }
}
