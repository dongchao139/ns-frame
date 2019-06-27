import {FormConfig} from "../FormConfig";
import {DynamicComponent} from "../../home/NsComponent";
import {Component, OnInit,} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
        <input type='text' id="skuInput" name="sku" [class.error]="sku.invalid" 
               placeholder='SKU' [formControl]="myForm.controls['sku']"/>
        <div class="err-msg" *ngIf="sku.invalid">Sku is invalid</div>
        <div class="err-msg" *ngIf="sku.hasError('required')">SKU is required</div>
        <div class="err-msg" *ngIf="sku.hasError('invalidSku')">SKU must begin with 123</div>
        <div>
            {{productName}}
        </div>
        <input type='text' id="productName" name="productName" placeholder='productName'
               [class.error]="myForm.controls['productName'].invalid"
               [formControl]="myForm.controls['productName']" [(ngModel)]="productName"/>
        <button type='button' (click)="onSubmit(myForm.value)">Submit</button>
        <div class="err-msg" *ngIf="myForm.invalid">Form is invalid</div>
    </form>
    `,
    styleUrls: [`../ns-form.css`]
})
export class NsFormComponent implements OnInit, DynamicComponent {
    data: FormConfig;
    myForm: FormGroup;
    sku: AbstractControl;
    productName: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku':['123ABC',Validators.compose([Validators.required,this.skuValidator])],
            'productName':['',Validators.required]
        });
        this.sku = this.myForm.controls['sku'];
        this.sku.valueChanges.subscribe((form:any)=> {
            console.log('sku changed to: ',form);
        });
    }
    ngOnInit(): void {

    }

    onSubmit(value: any) {
        console.log(value);

        //模拟CSRF
        /*var form = document.createElement('form');
        form.action = 'http://crm.netstar-soft.com/nsEngine/waitingList/details';
        form.method = 'POST';
        var input = document.createElement('input');
        input.type = 'text';
        input.value = 'csrf攻击啦！';
        input.id = 'title';
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();*/
    }

    skuValidator(fc:FormControl): {[s:string]:boolean} {
        if (!fc.value.match(/^123/)) {
            return {invalidSku:true}
        }
    }
}
