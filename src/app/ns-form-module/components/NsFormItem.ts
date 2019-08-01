import {Component, Input, OnInit} from "@angular/core";
import {AbstractControl, FormGroup} from "@angular/forms";
import {FormItemConfig, SelectConfig} from "../../app-base-module/config/NsFormConfig";
import {Subject} from "rxjs";

@Component({
    selector: 'ns-form-item',
    template: `
        <div [formGroup]="form">
            <label [attr.for]="question.key">{{question.label}}</label>

            <div [ngSwitch]="question.type">

                <input *ngSwitchCase="'TEXT'" [formControlName]="question.key"
                       [id]="question.key" [type]="question.type">

                <select (change)="onInput()" [id]="question.key" *ngSwitchCase="'SELECT'" [formControlName]="question.key">
                    <option *ngFor="let opt of question.subdata" [value]="opt.key">{{opt.value}}</option>
                </select>

            </div>

            <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
        </div>
    `
})
export class NsFormItemComponent implements OnInit{
    @Input() question: FormItemConfig<any> | SelectConfig<any>;
    @Input() form: FormGroup;
    //用于级联下拉框的主题
    @Input() beforeSubject?: Subject<any>;
    @Input() afterSubject?: Subject<any>;
    private formControl: AbstractControl;

    ngOnInit(): void {
        this.formControl = this.form.controls[this.question.key];
        if (this.beforeSubject) {
            this.beforeSubject.subscribe((param: any) => {
                //TODO 根据参数查询options数据
            })
        }
    }

    get isValid() {
        return this.formControl.valid;
    }

    onInput() {
        if (this.afterSubject) {
            this.afterSubject.next(this.formControl.value);
        }
    }
}
