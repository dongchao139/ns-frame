import {NsComponent} from "../NsComponent";

export abstract class AbstractMenuService {
    public redirectUrl:string;
    public redirectHash:string;
    abstract getComponentConfig(url: string): NsComponent<any>;
}
