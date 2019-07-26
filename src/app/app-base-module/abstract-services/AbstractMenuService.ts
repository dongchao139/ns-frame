import {NsComponent} from "../NsComponent";
import {MenuItem} from "../config/NsMenuConfig";

export abstract class AbstractMenuService {
    public redirectUrl:string;
    public redirectHash:string;
    abstract getComponentConfig(url: string): NsComponent<any>;
    abstract getMenus(): MenuItem[];
}
