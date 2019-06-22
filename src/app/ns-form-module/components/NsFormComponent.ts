import {FormConfig} from "../FormConfig";
import {DynamicComponent} from "../../home/NsComponent";
import {Component, OnInit,} from '@angular/core';

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
    data: FormConfig;

    ngOnInit(): void {

    }
}
