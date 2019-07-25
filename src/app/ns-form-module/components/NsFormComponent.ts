import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormItemConfig, NsFormConfig} from "../../app-common-directory/config/NsFormConfig";
import {FormConfigService} from "../services/FormConfigService";
import {DynamicComponent} from "../../app-common-directory/NsComponent";

@Component({
    selector: 'ns-form',
    template: `
    <div>
        <form (ngSubmit)="onSubmit()" [formGroup]="form">

            <div *ngFor="let question of questions" class="form-row">
                <ns-form-item [question]="question" [form]="form"></ns-form-item>
            </div>

            <div class="form-row">
                <button type="submit" [disabled]="!form.valid">Save</button>
            </div>
        </form>

        <div *ngIf="payLoad" class="form-row">
            <strong>Saved the following values</strong><br>{{payLoad}}
        </div>
    </div>
    `
})
export class NsFormComponent implements DynamicComponent{
    @Input() data: NsFormConfig;
    questions: FormItemConfig<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: FormConfigService) {  }

    ngOnInit() {
        this.questions = this.data.items;
        this.form = this.qcs.toFormGroup(this.data, this.questions);
        console.log(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
