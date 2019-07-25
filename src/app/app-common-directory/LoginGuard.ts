import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginService} from "./LoginService";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService:LoginService,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this.loginService.hasLogin()){
            return true;
        } else {
            this.loginService.storeUrl(state.url);
            this.router.navigate(['login']);
        }
    }

}
