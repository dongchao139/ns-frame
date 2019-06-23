import {FormConfig} from "../FormConfig";
import {DynamicComponent} from "../../home/NsComponent";
import {Component, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'ns-form',
    template: `
    <h4>Demo Form: Sku</h4>
    <!--<form #f="ngForm">
        <label for="skuInput" >SKU</label>
        <input type='text' id="skuInput" name="sku" placeholder='SKU' ngModel/>
        <button type='button' (click)="onSubmit(f.value)">Submit</button>
    </form>-->
    <form [formGroup]="myForm">
        <label for="skuInput" >SKU</label>
        <input type='text' id="skuInput" name="sku" placeholder='SKU' [formControl]="myForm.controls['sku']"/>
        <button type='button' (click)="onSubmit(myForm.value)">Submit</button>
    </form>
    `,
    styleUrls:[`../ns-form.css`]
})
export class NsFormComponent implements OnInit, DynamicComponent {
    data: FormConfig;
    myForm: FormGroup;
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku':['ABC123']
        })
    }
    ngOnInit(): void {

    }

    onSubmit(value: any) {
        console.log(value);
    }
}
