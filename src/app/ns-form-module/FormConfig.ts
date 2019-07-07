import {Type} from '@angular/core';
import {NavTabItem} from '../ns-menu-module/NsMenuConfig';
import {NsComponent} from "../home/NsComponent";
import {NsFormComponent} from "./components/NsFormComponent";

export enum HttpMethod {
    GET, POST, PUT, DELETE
}

/**表单项目类型**/
export enum FormItemType {
    SELECT, CHECKBOX, RADIO, TEXT, DATETIME, DATETIME_RANGE, REGION, SUBMIT
}

export interface FormConfig {
    id: string;         //表单dom的id
    title: string;      //表单标题
    method?: HttpMethod; //提交数据时的请求方式
    action?: string;     //提交数据的url
    items: FormItemConfig<any>[]; //包含的表单项目
}

export interface FormItemConfig<T> {
    id: string;         //ns-form-username 表单控件dom的id
    label: string;      //用户名 表单上显示的名称
    key: string;        //username 字段名,formControl的key
    value: T;           //zhangsan 值
    type: FormItemType; //TEXT 文本框
    width: number;      //12 宽
    rules?: any;        //required 验证规则
}

export interface SelectConfig<T> extends FormItemConfig<T> {
    multiple: boolean;
    textField: string;
    valueField: string;
    subdata?: SelectOption<T>[];
    url?: string;
    method?: HttpMethod;
    params?: Array<any>;
    dataSrc?: string;
}

export interface SelectOption<T> {
    key: T; //1,2
    value: string; //男,女
}

export class NsForm extends NsComponent<FormConfig> {
    /**
     * @param component 要加载的组件类
     * @param data 当前组件的配置
     * @param tabItem tab页的相关属性
     * @param items 当前组件的子组件列表
     */
    constructor(public component: Type<NsFormComponent>, public data: FormConfig,
                public tabItem: NavTabItem) {
        super(component, data, tabItem);
    }
}
