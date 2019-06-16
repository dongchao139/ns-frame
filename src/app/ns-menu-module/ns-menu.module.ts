import { NgModule } from '@angular/core';
import { NsMenuComponent, MenuItemComponent } from './components/NsMenuComponent';
import { CommonModule } from '@angular/common';

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
