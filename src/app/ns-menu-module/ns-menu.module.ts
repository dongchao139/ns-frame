import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsMenuComponent, MenuItemComponent } from './components/NsMenuComponent';


@NgModule({
  declarations: [
    NsMenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NsMenuComponent],
  providers: [],
  entryComponents: [NsMenuComponent]
})
export class NsMenuModule { }
