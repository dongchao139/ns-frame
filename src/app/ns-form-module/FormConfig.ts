export enum HttpMethod {
    GET, POST, PUT, DELETE
}

/**表单项目类型**/
export enum FormItemType {
    SELECT='SELECT', CHECKBOX='CHECKBOX', RADIO='RADIO',
    TEXT='TEXT', DATETIME='DATETIME', DATETIME_RANGE='DATETIME_RANGE',
    REGION='REGION', SUBMIT='SUBMIT'
}

export interface FormConfig {
    id: string;         //表单dom的id
    title: string;      //表单标题
    method?: HttpMethod; //提交数据时的请求方式
    action?: string;     //提交数据的url
    items: FormItemConfig<any>[]; //包含的表单项目
}

export class FormItemConfig<T> {
    id: string;         //ns-form-username 表单控件dom的id
    label: string;      //用户名 表单上显示的名称
    key: string;        //username 字段名,formControl的key
    value: T;           //zhangsan 值
    type: FormItemType; //TEXT 文本框
    width?: number;      //12 宽
    rules?: any;        //required 验证规则

    constructor(opts: any) {
        this.id     = opts.id       || 'form-item-demo';
        this.label  = opts.label    || '表单项示例';
        this.key    = opts.key      || 'name';
        this.value  = opts.value    || '';
        this.type   = opts.type     || FormItemType.TEXT;
        this.width  = opts.width    || 12;
        this.rules  = opts.rules    || undefined;
    }
}

export class SelectConfig<T> extends FormItemConfig<T> {
    multiple: boolean;
    subdata?: SelectOption<T>[];
    url?: string;
    method?: HttpMethod;
    params?: Array<any>;
    textField?: string;
    valueField?: string;

    constructor(opts: any) {
        super(opts);
        this.multiple   = opts.multiple     || false;
        this.subdata    = opts.subdata      || [];
        this.url        = opts.url          || '';
        this.method     = opts.method       || HttpMethod.GET;
        this.params     = opts.params       || [];
        this.textField  = opts.textField    || '';
        this.valueField = opts.valueField   || '';
    }
}

export interface SelectOption<T> {
    key: T; //1,2
    value: string; //男,女
}
