import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { FormItemConfig, HttpMethod } from "../FormConfig";

@Component({
    selector: 'ns-select',
    templateUrl: './ns-select.html'
})
export class NsSelectComponent<T> implements OnInit {

    @Input() config:SelectConfig<T>;
    @Output() onChange = new EventEmitter<T>();

    constructor() {

    }

    ngOnInit(): void {
        
    }
}

export interface SelectOption<T> {
    id: T;
    value: string;
}

export interface SelectConfig<T> extends FormItemConfig<T> {
    multiple: boolean;
    subdata?: SelectOption<T>[];
    url?: string;
    method?: HttpMethod;
    params?: Array<any>;
    dataSrc?: string;
}