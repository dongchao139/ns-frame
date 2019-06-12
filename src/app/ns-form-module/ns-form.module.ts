import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsFormComponent } from './components/NsFormComponent';
import { NsSelectComponent } from './components/NsSelectComponent';
import { FormItemDirective } from './directives/FormItemDirective';


@NgModule({
  declarations: [
    NsFormComponent,
    NsSelectComponent,
    FormItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [NsFormComponent],
  providers: [],
  entryComponents:[NsSelectComponent]
})
export class NsForm { }
