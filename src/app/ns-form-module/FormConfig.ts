import { Type } from "@angular/core";

export enum HttpMethod {
    GET, POST, PUT, DELETE
}

export enum FormSize {
    SMALL, MIDDLE, LARGE
}

export interface FormConfig {
    id: string;
    title: string;
    size: FormSize;
    method?: HttpMethod;
    action?: string;
    itemConfigs: FormItemConfig[];
}

export enum FormItemType {
    SELECT, CHECKBOX, RADIO, TEXT, DATETIME, DATETIME_RANGE, REGION, SUBMIT
}

export interface FormItemConfig {
    id: string;
    label: string;
    type: FormItemType;
    textField: string;
    valueField: string;
    width: number;
    rules?: any;
}

export class FormItem {
    constructor(public component: Type<any>, public data: FormItemConfig) {}
}


export interface SelectOption<T> {
    id: T;
    value: string;
}

export interface SelectConfig<T> extends FormItemConfig {
    multiple: boolean;
    subdata?: SelectOption<T>[];
    url?: string;
    method?: HttpMethod;
    params?: Array<any>;
    dataSrc?: string;
}

export class NsSelect<T> extends FormItem {
    constructor(public component: Type<any>, public data: SelectConfig<T>) {
        super(component, data);
    }
}