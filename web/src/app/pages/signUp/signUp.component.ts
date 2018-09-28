import {Component, ViewEncapsulation, ViewContainerRef, ViewChildren} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router}  from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BaThemeSpinner} from '../../theme/services';
import {EmailValidator, EqualPasswordsValidator, MobileNumberValidator} from '../../theme/validators';
import {BlankSpaceValidator} from '../../theme/validators/blank.validator';
import {AppConstant} from "../../app.constant";
import {ApplicationAdminServices} from '../../appServices/application';
import { AuthenticationHelper } from '../../app.authentication';

@Component({
    selector: 'signUp',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './signUp.html',
    styleUrls: ['./signUp.scss']
})

export class signUp extends AppConstant {
    form: FormGroup;
    submitted: boolean = false;
    data: any;
    isLoggedIn: boolean = false;
    model: any;
    roles: any;
    @ViewChildren('name') firstField;

    constructor(fb: FormBuilder, 
        private authentication: AuthenticationHelper,
        private router: Router, private appService: ApplicationAdminServices,
                public toastr: ToastrService, vRef: ViewContainerRef, private _spinner: BaThemeSpinner) {
        super();
        this._spinner.hide();
        this.form = fb.group({
            'name': ['', Validators.compose([Validators.required,BlankSpaceValidator.validate ])],
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        });

    }

    ngAfterViewInit() {
        this.firstField.first.nativeElement.focus();
    }

    //onSubmit
    onSubmit(value: any): void {
        this._spinner.show();
        let signUpData = {
            'name': value.name.trim(),
            'email': value.email,
            'password': value.password
        };

        // Api call to sign up, if success signUpSuccess(data) and if error signUpFail(error)
        this.appService.userSignUp(signUpData).subscribe(
            data => this.signUpSuccess(data),
            error => this.signUpFail(error)
        );
    }

    /**
     * if signup success
     * @param data
     */
    signUpSuccess(result) {
        if(result){
            this._spinner.hide();

            this.authentication.setToken(result.data.token);
            this.isLoggedIn = true;
            this.authentication.setIsLoggedIn(true);
            this.authentication.setUserLocal(result);

            this.toastr.success('SignUp Successful.');
            this.router.navigate(['users']);
        }
    }

    /**
     * if signup fail
     * @param Error
     */
    signUpFail(Error) {
        this._spinner.hide();
        if (Error.error && Error.error.message) {
            this.toastr.error(Error.error.message);
        } else {
            this.toastr.error('Server error');
        }
    }

    /**
     *  To navigate to Home page.
     */
    navigateToHome() {
        this.router.navigate(['']);
    }

    /**
     *  To navigate to sign in page.
     */
    navigateToSignIn() {
        this.router.navigate(['/login']);
    }

    trimContent(value, control) {
        if(value) {
            this.form.controls[control].setValue(value.trim());
        }
        return value.trim();

    }
    

}
