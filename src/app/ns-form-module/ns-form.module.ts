import {NgModule} from '@angular/core';
import {NsFormComponent} from './components/NsFormComponent';
import {NsSelectComponent} from './components/NsSelectComponent';
import {FormItemDirective} from './directives/FormItemDirective';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
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
  providers: [],
  entryComponents:[NsSelectComponent,NsFormComponent]
})
export class NsFormModule { }
