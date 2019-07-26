import {Injectable} from "@angular/core";
import {MenuService} from "./MenuService";
import {AbstractLoginService} from "../../app-base-module/abstract-services/AbstractLoginService";

@Injectable()
export class LoginService extends AbstractLoginService{
    public user: any;

    constructor(private menuService: MenuService) {
        super();
    }

    public doLogin(value: any): string | boolean {
        if ((<any>value).username != 'admin' || (<any>value).password != '123') {
            return 'error username or password';
        }
        return false;
    }

    public doLogout(): boolean {
        this.user = null;
        return true;
    }

    public saveUser(user: any): boolean {
        this.user = user;
        return true;
    }

    public hasLogin(): boolean {
        return this.user != null;
    }

    public storeUrl(url:string) {
        this.menuService.redirectUrl = url.substring(0, url.indexOf('#'));
        if (url.indexOf('#') > 0) {
            this.menuService.redirectHash = url.substring(url.indexOf('#'));
        }
    }

}
