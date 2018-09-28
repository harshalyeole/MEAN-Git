import { Component } from '@angular/core';
import { AuthenticationHelper } from "../../app.authentication";
import { Router } from '@angular/router';
import { BaThemeSpinner } from "../../theme/services/baThemeSpinner/baThemeSpinner.service";
import { ApplicationAdminServices } from '../../appServices/application';

@Component({
    selector: 'users',
    styleUrls: ['./users.scss'],
    templateUrl: './users.html'
})

export class Users {
    isUser: any;
    githubUsers: any = [];
    searchContent: any;
    maxScrollLimit = 10;
    selector: string = '.main-panel';
    constructor(private _spinner: BaThemeSpinner,
        private authentication: AuthenticationHelper,
        private appService: ApplicationAdminServices,
        private router: Router) {
        this.isUser = this.authentication.isUser();
    }

    totalgithubUsers() {
        if (this.githubUsers && this.githubUsers.length) {
            return this.githubUsers.slice(0, this.maxScrollLimit);
        } else {
            return [];
        }
    }
    ngOnInit() {
        this.gitHub("harshalyeo");
    }

    onScroll() {
        this.maxScrollLimit = this.maxScrollLimit + 10;
    }


    gitHub(data) {
        this._spinner.show();
        this.appService.getGitHubUsers(data).subscribe(
            data => this.githubSuccess(data),
            error => this.githubFail(error)
        );
    }


    userDetails(user) {
        this.authentication.setUserDetails(user);
        this.router.navigate(['userDetails/'+user.login]);
    }

    findUser(searchContent) {
        this.gitHub(searchContent);
    }

    githubSuccess({ data }) {
        this.githubUsers = data;
        this._spinner.hide();
    }

    githubFail(error) {
        this._spinner.hide();
    }
}
