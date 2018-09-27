import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientHelper } from '../app.httpClient';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class ApplicationAdminServices {
    private loginWithfacebookUrl: string = 'users/loginwithfacebook';
    private loginUrl: string = 'users/login';
    private signUpUrl: string = 'users/signup';
    private editUserProfileUrl: string = 'users/edit';
    private createInvestorProfileUrl: string = 'investors/createInvestor';
    private generateCodeUrl: string = 'users/generateCode';
    private forgotPasswordUrl: string = 'users/forgotPassword';
    private setPasswordUrl: string = 'users/setPassword';
    private getAllUsersUrl: string = 'users/fetchUsers';
    private getAllInvestorsUrl: string = 'investors/fetchInvestors';
    private getUserProfileUrl: string = 'users/profile';
    private emailVerificationUrl: string = 'users/emailVerification';
    private updateActiveStatusUrl: string = 'users/toActiveInActiveUser';
    private changePasswordUrl: string = 'users/changePassword';
    private getUsersExportDataUrl: string = 'users/exportUsers';
    private getInvestorsExportDataUrl: string = 'investors/exportInvestors';
    private addNewUserUrl: string = 'users/addUser';
    private createOfferingUrl: string = 'deals/addDeal';
    private editOfferingUrl: string = 'deals/edit';
    private getAllOfferingsUrl: string = 'deals/fetchDeals';
    private getSpecificOfferingUrl: string = 'deals/deal/';
    private getGitHubUsersUrl: string = 'users/github/search?q=';
    private httpClient: HttpClientHelper;

    constructor(httpClient: HttpClientHelper, private router: Router, private toastr: ToastrService) {
        this.httpClient = httpClient;
    }

    // Login With Facebook
    getGitHubUsers(data) {
        return this.httpClient.get(this.getGitHubUsersUrl + data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
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

    //To get call user signUp
    addNewUser(data): Observable<any> {
        return this.httpClient.post(this.addNewUserUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call edit user profile
    editUserProfile(data): Observable<any> {
        return this.httpClient.put(this.editUserProfileUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To post call create investor profile
    createInvestorProfile(data): Observable<any> {
        return this.httpClient.post(this.createInvestorProfileUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call user generateCode
    generateCode(data): Observable<any> {
        return this.httpClient.post(this.generateCodeUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    // To get Users Export Data
    getUsersExportData(searchValue): Observable<any> {
        return this.httpClient.get(this.getUsersExportDataUrl + searchValue)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    // To get Investors Export Data
    getInvestorsExportData(searchValue): Observable<any> {
        return this.httpClient.get(this.getInvestorsExportDataUrl + searchValue)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call user forgotPassword
    forgotPassword(data): Observable<any> {
        return this.httpClient.post(this.forgotPasswordUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call user setPassword
    setPassword(data): Observable<any> {
        return this.httpClient.post(this.setPasswordUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call get all user
    getUsers(searchValue): Observable<any> {
        return this.httpClient.get(this.getAllUsersUrl + searchValue)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call get all investors
    getInvestors(searchValue): Observable<any> {
        return this.httpClient.get(this.getAllInvestorsUrl + searchValue)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call get user profile details
    getUserProfile(): Observable<any> {
        return this.httpClient.get(this.getUserProfileUrl)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call user forgotPassword
    emailVerification(data): Observable<any> {
        return this.httpClient.put(this.emailVerificationUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To get call
    editUserActiveStatus(data): Observable<any> {
        return this.httpClient.put(this.updateActiveStatusUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call change password
    changePassword(data): Observable<any> {
        return this.httpClient.post(this.changePasswordUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call create offerings API.
    createOffering(data): Observable<any> {
        return this.httpClient.post(this.createOfferingUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call edit offerings API.
    editOffering(data): Observable<any> {
        return this.httpClient.put(this.editOfferingUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call get all offerings
    getOfferings(searchValue): Observable<any> {
        return this.httpClient.get(this.getAllOfferingsUrl + searchValue)
            .map(this.extractResponse)
            .catch(this.handleError.bind(this));
    }

    //To call get specific offering details
    getSpecificOffering(offeringId): Observable<any> {
        return this.httpClient.get(this.getSpecificOfferingUrl + offeringId)
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
