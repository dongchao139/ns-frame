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
    cascadeSubjects: { [key: string]: Subject<any> } [] = [];

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
            for (let i = 0; i < this.data.cascade.length; i++) {
                let itemId = this.data.cascade[i];
                let items: FormItemConfig<any>[] = this.data.items;
                for (var item of items) {
                    if (item.id == itemId) {
                        var key = itemId.toString();
                        this.cascadeSubjects[i] = {};
                        this.cascadeSubjects[i][itemId] = new Subject<any>();
                    }
                }
            }
        }
    }

    beforeCascade(itemId: string): Subject<any> {
        if (this.cascadeSubjects) {
            for (let i = 0; i < this.cascadeSubjects.length; i++) {
                if (this.cascadeSubjects[i].hasOwnProperty(itemId) && i > 0) {
                    let key = Object.keys(this.cascadeSubjects[i - 1])[0];
                    return this.cascadeSubjects[i - 1][key];
                }
            }
        }
        return null;
    }

    afterCascade(itemId: string): Subject<any> {
        if (this.cascadeSubjects) {
            for (let i = 0; i < this.cascadeSubjects.length; i++) {
                if (this.cascadeSubjects[i].hasOwnProperty(itemId)) {
                    return this.cascadeSubjects[i][itemId];
                }
            }
        }
        return null;
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
        console.log(this.payLoad);
    }
}
