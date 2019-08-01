import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormItemConfig, NsFormConfig} from "../../app-base-module/config/NsFormConfig";
import {FormConfigService} from "../services/FormConfigService";
import {DynamicComponent} from "../../app-base-module/NsComponent";
import {Subject} from "rxjs";

@Component({
    selector: 'ns-form',
    template: `
        <div>
            <form (ngSubmit)="onSubmit()" [formGroup]="form">

                <div *ngFor="let question of questions; let i = index" class="form-row">
                    <ns-form-item [question]="question" [form]="form"
                                  [beforeSubject]="beforeCascade(question.id)"
                                  [afterSubject]="afterCascade(question.id)"></ns-form-item>
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
export class NsFormComponent implements DynamicComponent {
    @Input() data: NsFormConfig;
    questions: FormItemConfig<any>[] = [];
    cascadeSubjects: { key_1: string, key_2: string, value: Subject<any> } [] = [];

    form: FormGroup;
    payLoad = '';

    constructor(private formConfigService: FormConfigService) {
    }

    ngOnInit() {
        this.questions = this.data.items;
        this.form = this.formConfigService.toFormGroup(this.data, this.questions);
        this.initCascadeSubjects();
    }

    initCascadeSubjects() {
        if (this.data.cascade && this.data.cascade.length > 0) {
            for (let cas of this.data.cascade) {
                if (cas != null && cas.length > 0) {
                    var item = {
                        key_1: cas[0],
                        key_2: cas[1],
                        value: new Subject<any>()
                    };
                    this.cascadeSubjects.push(item);
                }
            }
        }
    }

    beforeCascade(itemId: string): Subject<any> {
        for (let i = 0; i < this.cascadeSubjects.length; i++) {
            if (this.cascadeSubjects[i].key_2 == itemId) {
                return this.cascadeSubjects[i]['value'];
            }
        }
        return null;
    }

    afterCascade(itemId: string): Subject<any> {
        for (let i = 0; i < this.cascadeSubjects.length; i++) {
            if (this.cascadeSubjects[i].key_1 == itemId) {
                return this.cascadeSubjects[i]['value'];
            }
        }
        return null;
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
        console.log(this.payLoad);
    }
}
