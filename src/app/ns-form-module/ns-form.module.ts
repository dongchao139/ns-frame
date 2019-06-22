import {NgModule} from '@angular/core';
import {NsFormComponent} from './components/NsFormComponent';
import {NsSelectComponent} from './components/NsSelectComponent';
import {FormItemDirective} from './directives/FormItemDirective';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    NsFormComponent,
    NsSelectComponent,
    FormItemDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [NsFormComponent],
  providers: [],
  entryComponents:[NsSelectComponent,NsFormComponent]
})
export class NsFormModule { }
