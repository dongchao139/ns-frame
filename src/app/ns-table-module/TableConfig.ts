
export interface TableConfig {
    tableId: string; //表格id
    dataSource: Array<any>;//自定义的table数据
    pageLength: number;//每页显示条数
    inLineBtn?: string;//行内按钮名称
    isSearch?: boolean;//是否允许列搜索
    isServerMode?: boolean;//是否服务端分页
}

export interface ColumnConfig {
    field: string; //字段名
    title: string; //字段标题
    width?: number; //列宽
    orderable?: boolean; //是否允许列排序
    searchable?: boolean;//是否允许列搜索(服务器端分页时,进行[快速搜索])
    total?: boolean; //总计
    precision?: number; //小数位数
    hidden?:boolean;// 是否隐藏
}
