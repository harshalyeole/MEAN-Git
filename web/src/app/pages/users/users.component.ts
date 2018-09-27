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


    constructor(private _spinner: BaThemeSpinner,
        private authentication: AuthenticationHelper,
        private appService: ApplicationAdminServices,
        private router: Router) {
        this.isUser = this.authentication.isUser();
    }

    ngOnInit() {
        this.gitHub("harshalyeo");
    }

    gitHub(data) {
        this._spinner.show();
        this.appService.getGitHubUsers(data).subscribe(
            data => this.githubSuccess(data),
            error => this.githubFail(error)
        );
    }


    userDetails(user) {
        console.log("clicked",user);
        this.authentication.setUserDetails(user);
        this.router.navigate(['followers']);
    }

    findUser(searchContent) {
        this.gitHub(searchContent);
    }

    githubSuccess({data}) {
        console.log(data);
        this.githubUsers = data;
        this._spinner.hide();
    }

    githubFail(error) {
        console.log(error);
        this._spinner.hide();
    }
}
