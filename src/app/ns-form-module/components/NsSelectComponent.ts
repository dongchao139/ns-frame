import {SelectConfig} from "../../app-base-module/config/NsFormConfig";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'ns-select',
    template:`
        <select>
            <option>text1</option>
            <option>text2</option>
        </select>
    `
})
export class NsSelectComponent<T> implements OnInit {

    @Input() config: SelectConfig<T>;
    @Output() onChange = new EventEmitter<T>();


    constructor() {

    }

    ngOnInit(): void {

    }
}
