import { Component, ViewContainerRef, ViewChildren, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicationAdminServices } from '../../appServices/application';
import { EmailValidator } from '../../theme/validators';
import { AuthenticationHelper } from '../../app.authentication';
import { BaThemeSpinner } from '../../theme/services';
import { AppConstant } from '../../app.constant';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})

export class Login extends AppConstant {

    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    submitted: boolean = false;
    isLoggedIn: boolean = false;
    @ViewChildren('emailField') emailField;

    constructor(fb: FormBuilder, private router: Router, public toastr: ToastrService,
                private appService: ApplicationAdminServices, private _spinner: BaThemeSpinner,
                private authentication: AuthenticationHelper, vRef: ViewContainerRef) {
        super();
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    /**
     * Called automatically after view initialised
     */
    ngAfterViewInit() {
        this._spinner.hide();
    }

    /**
     * get userName and password from login page and call service
     * @param loginData
     */
    onSubmit(loginData: any): void {
        this._spinner.show();
        this.submitted = true;
        let data = {
            'email': loginData.email,
            'password': loginData.password,
            'deviceToken': 'device token here',
            'deviceOs': 'device OS here',
            'udId': 'ud id here'
        };
        this.appService.userLogin(data).subscribe(
            data => this.loginSuccess(data),
            error => this.loginFail(error)
        );
    }

    /**
     * if err
     * @param err
     */
    loginFail(err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        } else {
            this.toastr.error('Server error');
        }
        this._spinner.hide();
        this.submitted = false;
    }
    
    /**
     * if login success
     * @param result
     */
    loginSuccess(result) {
        if(result){
            this._spinner.hide();
            this.authentication.setToken(result.data.token);
            this.isLoggedIn = true;
            this.authentication.setIsLoggedIn(true);
            this.authentication.setUserLocal(result);
            this.toastr.success('Login Successful');
            this.router.navigate(['users']);
        }
    }
}