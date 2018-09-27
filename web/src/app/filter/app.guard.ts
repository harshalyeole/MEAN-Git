import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationHelper} from '../app.authentication';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private authService: AuthenticationHelper, private route: Router) {
    }

    canActivate() {
        if (!this.authService.isLoggedIn()) {
            this.route.navigate(['']);
            return false;
        } else {
            return true;
        }
    }
}
