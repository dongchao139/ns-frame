import {Injectable} from "@angular/core";
import {FormItemConfig, NsFormConfig} from "../../ns-basic-module/config/NsFormConfig";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class FormConfigService {

    public toFormGroup(formConfig: NsFormConfig, items: FormItemConfig<any>[]): FormGroup {
        let group: any = {};

        items.forEach(item => {
            group[item.key] = item.rules ? new FormControl(item.value || '', Validators.required)
                : new FormControl(item.value || '');
        });
        return new FormGroup(group);
    }
}
