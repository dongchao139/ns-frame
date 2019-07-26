import {SelectConfig} from "../../app-base-module/config/NsFormConfig";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
