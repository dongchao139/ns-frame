import { NgModule } from '@angular/core';
import { NsMenuComponent, MenuItemComponent } from './components/NsMenuComponent';
import { CommonModule } from '@angular/common';
import {NavTabComponent} from './components/NavTabComponent';

@NgModule({
  declarations: [
    NsMenuComponent,
    MenuItemComponent,
    NavTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NsMenuComponent,NavTabComponent],
  providers: [],
  entryComponents: [NsMenuComponent]
})
export class NsMenuModule { }
