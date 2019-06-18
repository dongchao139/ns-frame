import {Component, Input, OnInit} from '@angular/core';
import {NavTabItem} from '../NsMenuConfig';

@Component({
  selector: 'ns-tab',
  template: `
    <p [hidden]="!tabItem.active">{{tabItem.content}}</p>
  `



})
export class NavTabComponent implements OnInit{
  @Input()
  tabItem: NavTabItem;

  ngOnInit(): void {
    console.log(this.tabItem);
  }

}
