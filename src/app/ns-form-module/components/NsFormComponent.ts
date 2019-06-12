import { Component, OnInit, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { FormItemDirective } from "../directives/FormItemDirective";
import { NsSelectComponent } from "./NsSelectComponent";
import { FormItemType, NsSelect } from "../FormConfig";

@Component({
    selector: 'ns-form',
    templateUrl: './ns-form.html'
})
export class NsFormComponent implements OnInit {

    @ViewChild(FormItemDirective)
    formItem: FormItemDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    loadComponent() {
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