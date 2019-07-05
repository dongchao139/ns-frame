import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'login',
    template: `
        <!-- TODO 使用自己的组件和指令-->
        <div class="login-wrapper">
            <form class="login">
                <section class="title">
                    <h3 class="welcome">Welcome to</h3>
                    Company Product Name
                    <h5 class="hint">Use your Company ID to sign in or create one now</h5>
                </section>
                <div class="login-group">
                    <clr-select-container>
                        <select clrSelect name="type" [(ngModel)]="form.type">
                            <option value="local">Local Users</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </clr-select-container>
                    <clr-input-container>
                        <input type="text" name="username" clrInput placeholder="Username" [(ngModel)]="form.username"/>
                    </clr-input-container>
                    <clr-password-container>
                        <input type="password" name="password" clrPassword placeholder="Password" [(ngModel)]="form.password"/>
                    </clr-password-container>
                    <div class="error active" hidden>
                        Invalid user name or password
                    </div>
                    <button type="submit" class="btn btn-primary">NEXT</button>
                    <a href="javascript:void(0);" class="signup">Sign up for a Company ID</a>
                </div>
            </form>
        </div>
    `
})
export class LoginComponent {
    public form:FormObject;

    constructor(public router: Router) {

    }
    
    public login() {
        this.router.navigate(['home'])
    }
}

export interface FormObject {
    type: string;
    username:string;
    password: string;
    rememberMe: boolean;
}
