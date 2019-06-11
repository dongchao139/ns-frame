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
    itemConfigs: FormItemConfig<any>[];
}

export enum FormItemType {
    SELECT, CHECKBOX, RADIO, TEXT, DATETIME, DATETIME_RANGE, REGION, SUBMIT
}

export interface FormItemConfig<T> {
    id: string;
    label: string;
    type: FormItemType;
    textField: string;
    valueField: T;
    width: number;
    rules?: any;
}