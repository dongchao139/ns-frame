import { FormItemDirective } from "../directives/FormItemDirective";
import { NsSelectComponent } from "./NsSelectComponent";
import { FormItemType, NsSelect, FormConfig } from "../FormConfig";
import { DynamicComponent } from "../../home/NsComponent";
import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
    selector: 'ns-form',
    template: `
    <h4>{{data.title}}</h4>
    <form action='data.action' method='data.method'>
        <input type='text' placeholder='demoinput'/>
        <input type='button' value='Submit'/>
    </form>
`
})
export class NsFormComponent implements OnInit, DynamicComponent {

    @ViewChild(FormItemDirective, { static: true })
    formItem: FormItemDirective;
    data: FormConfig;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


    loadSelectComponent() {
        var nsSelect = new NsSelect(NsSelectComponent, {
            id: 'select-demo',
            label: 'select-demo',
            type: FormItemType.SELECT,
            textField: 'name',
            valueField: 'id',
            multiple: false,
            width: 4,
            subdata: [
                {
                    id: 1,
                    value: 'text1'
                }, {
                    id: 2,
                    value: 'text2'
                }
            ]
        });
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(nsSelect.component);

        let viewContainerRef = this.formItem.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<NsSelectComponent<number>>componentRef.instance).config = nsSelect.data;
    }

    ngOnInit(): void {

    }
}