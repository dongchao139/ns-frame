import { OnInit, Component } from "@angular/core";
import { FormItemValidator } from "../FormValidator";

@Component({
    selector: 'ns-select',
    templateUrl: './ns-select.html'
})
export class NsSelectComponent<T> implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}

export interface SelectItem<T> {
    id: T;
    value: string;
}

export enum FormItemType {
    SELECT,CHECKBOX,RADIO,TEXT,DATETIME,DATETIME_RANGE,REGION
}

export interface FormItemConfig<T> {
    id: string;
    label: string;
    type: FormItemType;
    textField: string;
    valueField: T;
    rules: any;
}

export interface SelectItemConfig<T> extends FormItemConfig<T> {
    multiple: boolean;
    rules: FormItemValidator<T>;
    subdata: SelectItem<T>[];
    changeHandler: (value:T)=> void;
}