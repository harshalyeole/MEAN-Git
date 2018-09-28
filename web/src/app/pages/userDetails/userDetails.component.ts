import { Component } from '@angular/core';
import { AuthenticationHelper } from "../../app.authentication";
import { Router, ActivatedRoute } from '@angular/router';
import { BaThemeSpinner } from "../../theme/services/baThemeSpinner/baThemeSpinner.service";
import { ApplicationAdminServices } from '../../appServices/application';

@Component({
    selector: 'userDetails',
    styleUrls: ['./userDetails.scss'],
    templateUrl: './userDetails.html'
})
export class UserDetails {
    isUser: any;
    githubUser: any = [];
    userName: any;

    constructor(private _spinner: BaThemeSpinner,
        private route: ActivatedRoute,
        private appService: ApplicationAdminServices,
        private authentication: AuthenticationHelper,
        private router: Router) {
        this.isUser = this.authentication.isUser();
        this.userName = route.snapshot.params.username
    }


    gitHub(data) {
        this._spinner.show();
        this.appService.getGitHubUserDetails(this.userName).subscribe(
            data => this.githubSuccess(data),
            error => this.githubFail(error)
        );
    }

    githubSuccess({ data }) {
        this.githubUser = data;
        this._spinner.hide();
    }

    githubFail(error) {
        this._spinner.hide();
    }

    ngOnInit() {
        this.gitHub(this.userName)
    }

    ngAfterViewChecked() {
        this._spinner.hide();
    }
}
