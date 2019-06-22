import {Type} from '@angular/core';
import {NavTabItem} from '../ns-menu-module/NsMenuConfig';
import {NsComponent} from "../home/NsComponent";
import {NsFormComponent} from "./components/NsFormComponent";

export enum HttpMethod {
    GET, POST, PUT, DELETE
}

export enum FormItemType {
    SELECT, CHECKBOX, RADIO, TEXT, DATETIME, DATETIME_RANGE, REGION, SUBMIT
}

export interface FormConfig {
    id: string;
    title: string;
    method?: HttpMethod;
    action?: string;
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

export interface SelectConfig<T> extends FormItemConfig {
    multiple: boolean;
    subdata?: SelectOption<T>[];
    url?: string;
    method?: HttpMethod;
    params?: Array<any>;
    dataSrc?: string;
}

export interface SelectOption<T> {
    id: T;
    value: string;
}

export class NsForm extends NsComponent<FormConfig> {
    /**
     * @param component 要加载的组件类
     * @param data 当前组件的配置
     * @param tabItem tab页的相关属性
     * @param items 当前组件的子组件列表
     */
    constructor(public component: Type<NsFormComponent>, public data: FormConfig,
                public tabItem: NavTabItem, public items: FormItem[]) {
        super(component, data, tabItem, items);
    }
}

export class FormItem extends NsComponent<FormItemConfig> {
    constructor(public component: Type<any>, public data: FormItemConfig) {
        super(component, data);
    }
}

export class NsSelect<T> extends FormItem {
    constructor(public component: Type<any>, public data: SelectConfig<T>) {
        super(component, data);
    }
}
