import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login-component.html'
})
export class LoginComponent {
    constructor(public router: Router) {

    }
    
    public login() {
        this.router.navigate(['home'])
    }
}