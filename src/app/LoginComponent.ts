import {Component} from "@angular/core";
import {Router} from "@angular/router";

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
                </div>
            </form>
        </div>
    `,
    styleUrls: ['./login.css']
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
