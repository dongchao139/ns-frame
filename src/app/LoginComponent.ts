import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    template: `
        <div class="login-wrapper">
            <form class="login">
                <section class="title">
                    <h3 class="welcome">Welcome to</h3>
                    Company Product Name
                    <h5 class="hint">Use your Company ID to sign in or create one now</h5>
                </section>
                <div class="login-group">
                    <div class="clr-control-container clr-form-control">
                        <div class="clr-select-wrapper">
                            <select class="clr-select ng-valid ng-touched ng-dirty" name="type" [(ngModel)]="form.type">
                                <option value="local">Local Users</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                    </div>
                    <div class="clr-control-container clr-form-control">
                        <div class="clr-input-wrapper">
                            <div class="clr-input-group">
                                <input type="text" name="username" class="clr-input ng-pristine ng-valid ng-touched"
                                       placeholder="Username" [(ngModel)]="form.username"/>
                            </div>
                        </div>
                    </div>
                    <div class="clr-control-container clr-form-control">
                        <div class="clr-input-wrapper">
                            <div class="clr-input-group">
                                <input type="password" name="password" class="clr-input ng-pristine ng-valid ng-touched"
                                       placeholder="Password" [(ngModel)]="form.password"/>
                            </div>
                        </div>
                    </div>
                    <div class="error active">
                        Invalid user name or password
                    </div>
                    <button type="button" (click)="login()" class="btn btn-primary">NEXT</button>
                    <a href="javascript:void(0);" class="signup">Sign up for a Company ID</a>
                </div>
            </form>
        </div>
    `,
    styles:[`        
        .login-wrapper, .login-wrapper .login {
            display: block;
        }

        .login-wrapper {
            background-size: 100%;
            background-position: 0;
            background-repeat: no-repeat;
            height: 100%;
            min-width: 890px;
        }
        .login-wrapper .login {
            background: #fafafa;
            float: right;
            position: relative;
            flex-direction: column;
            justify-content: center;
            padding: 1rem 2.5rem;
            min-height: 24rem;
            width: 21rem;
            height: 60%;
            top: 8%;
            right: 15%;
        }
    `]
})
export class LoginComponent {
    public form:FormObject;

    constructor(public router: Router) {
        this.form = {}
    }

    public login() {
        this.router.navigate(['home'])
    }
}

export interface FormObject {
    type?: string;
    username?:string;
    password?: string;
    rememberMe?: boolean;
}
