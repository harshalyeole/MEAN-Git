import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../app.httpClient';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class ApplicationAdminServices {
    private loginUrl: string = 'users/login';
    private signUpUrl: string = 'users/signup';
    private getGitHubFollowersUrl: string = 'users/githubFollowers';
    private getGitHubUsersUrl: string = 'users/github/search?q=';
    private getGitHubUserDetailsUrl: string = 'users/github/';
    private httpClient: HttpClientHelper;

    constructor(httpClient: HttpClientHelper, private router: Router, private toastr: ToastrService) {
        this.httpClient = httpClient;
    }

    //To get call user login
    userLogin(data): Observable<any> {
        return this.httpClient.post(this.loginUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call user signUp
    userSignUp(data): Observable<any> {
        return this.httpClient.post(this.signUpUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    // Get GitHub Users
    getGitHubUsers(data) {
        return this.httpClient.get(this.getGitHubUsersUrl + data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    // Get User Details
    getGitHubUserDetails(data) {
        return this.httpClient.get(this.getGitHubUserDetailsUrl + data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    // Get User Details
    getGitHubFollowers() {
        return this.httpClient.get(this.getGitHubFollowersUrl)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    private extractResponse(res) {
        return res;
    }

    private handleError(error) {
        let errorCode = error.error.code;
        // if invalid token or token expired
        if (errorCode == '-114' || errorCode == -114 || errorCode == '-102' || errorCode == -102 || errorCode == '-132'
            || errorCode == -132) {
            // if the user is inactivated by the admin
            if (errorCode == '-132' || errorCode == -132) {
                localStorage.clear();
                this.toastr.error(error.error.message);
                setTimeout(() => {
                    this.router.navigate(['login']);
                }, 3000);
            } else {
                localStorage.clear();
                this.router.navigate(['login']);
            }
        } else {
            return Observable.throw(error);
        }
    }
}
