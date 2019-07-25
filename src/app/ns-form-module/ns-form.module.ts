import {NgModule} from '@angular/core';
import {NsFormComponent} from './components/NsFormComponent';
import {NsSelectComponent} from './components/NsSelectComponent';
import {FormItemDirective} from './directives/FormItemDirective';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NsFormItemComponent} from "./components/NsFormItem";
import {FormConfigService} from "./services/FormConfigService";

@NgModule({
    declarations: [
        NsFormComponent,
        NsFormItemComponent,
        NsFormComponent,
        NsSelectComponent,
        FormItemDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [NsFormComponent],
    providers: [FormConfigService],
    entryComponents: [NsSelectComponent, NsFormComponent, NsFormComponent]
})
export class NsFormModule {
}
