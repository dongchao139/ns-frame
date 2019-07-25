import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormItemConfig, SelectConfig} from "../../app-common-directory/config/NsFormConfig";

@Component({
    selector: 'ns-form-item',
    template: `
        <div [formGroup]="form">
            <label [attr.for]="question.key">{{question.label}}</label>

            <div [ngSwitch]="question.type">

                <input *ngSwitchCase="'TEXT'" [formControlName]="question.key"
                       [id]="question.key" [type]="question.type">

                <select [id]="question.key" *ngSwitchCase="'SELECT'" [formControlName]="question.key">
                    <option *ngFor="let opt of question.subdata" [value]="opt.key">{{opt.value}}</option>
                </select>

            </div>

            <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
        </div>
    `
})
export class NsFormItemComponent {
    @Input() question: FormItemConfig<any> | SelectConfig<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
}
