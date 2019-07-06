import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./service/LoginService";

@Component({
    selector: 'login',
    template: `
    <div class="login-wrapper">
        <form class="login">
            <section class="title">
                <h3 class="welcome">Welcome to</h3>
                NetStar Soft Company
            </section>
            <div class="login-group">
                <div class="clr-control-container clr-form-control">
                    <div class="clr-select-wrapper">
                        <select class="clr-select ng-valid ng-touched ng-dirty" name="type" 
                                [formControl]="form.controls['type']">
                            <option value="local">Local Users</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                </div>
                <div class="clr-control-container clr-form-control">
                    <div class="clr-input-wrapper">
                        <div class="clr-input-group">
                            <input type="text" name="username" class="clr-input ng-pristine ng-valid ng-touched"
                                   placeholder="Username" [formControl]="form.controls['username']"/>
                        </div>
                    </div>
                </div>
                <div class="clr-control-container clr-form-control">
                    <div class="clr-input-wrapper">
                        <div class="clr-input-group">
                            <input type="password" name="password" class="clr-input ng-pristine ng-valid ng-touched"
                                   placeholder="Password" [formControl]="form.controls['password']"/>
                        </div>
                    </div>
                </div>
                <div class="error active" [hidden]="valid">
                    Invalid user name or password
                </div>
                <button type="button" (click)="login()" class="btn btn-primary">NEXT</button>
            </div>
        </form>
    </div>
    `,
    styleUrls: ['./login.css']
})
export class LoginComponent {
    public form: FormGroup;
    public valid: boolean;

    constructor(public router: Router,fb: FormBuilder,private loginService: LoginService) {
        this.form = fb.group({
            'type':'',
            'username':'',
            'password':''
        });
        this.valid = true;
    }

    public login() {
        var msg: string | boolean = this.loginService.doLogin(this.form.value);
        if (msg) {
            this.valid = false;
        } else {
            this.loginService.saveUser(this.form.value);
            var url:string = this.loginService.redirectUrl;
            if (url) {
                this.router.navigate([url]);
            } else {
                this.router.navigate(['home'])
            }
        }
    }
}

export interface LoginObject {
    type?: string;
    username?:string;
    password?: string;
}
