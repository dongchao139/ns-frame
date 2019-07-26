import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {AbstractLoginService} from "../app-base-module/abstract-services/AbstractLoginService";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService:AbstractLoginService,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        console.log(this.router);
        if (this.loginService.hasLogin()){
            return true;
        } else {
            this.loginService.storeUrl(state.url);
            this.router.navigate(['login']);
        }
    }

}
