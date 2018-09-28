import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthenticationHelper } from "../../app.authentication";
import { Router } from '@angular/router';
import { BaThemeSpinner } from "../../theme/services/baThemeSpinner/baThemeSpinner.service";
import { ApplicationAdminServices } from '../../appServices/application';

@Component({
    selector: 'followers',
    styleUrls: ['./followers.scss'],
    templateUrl: './followers.html'
})

export class Followers {
    isUser: any;
    githubFollowers: any = [];
    searchContent: any;
    maxScrollLimit = 10;
    selector: string = '.main-panel';




    barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    barChartLabels: string[] = [];
    barChartType: string = 'bar';
    barChartLegend: boolean = true;


    barChartData: any[] = [{ data: [] }];

    constructor(private _spinner: BaThemeSpinner,
        private authentication: AuthenticationHelper,
        private appService: ApplicationAdminServices,
        private cdr: ChangeDetectorRef,
        private router: Router) {
        this.isUser = this.authentication.isUser();

    }

    ngOnInit() {
        this.gitHubFollowers();
    }


    totalGithubFollowers() {
        if (this.githubFollowers && this.githubFollowers.length) {
            return this.githubFollowers.slice(0, this.maxScrollLimit);
        } else {
            return [];
        }
    }


    gitHubFollowers() {
        this._spinner.show();
        this.appService.getGitHubFollowers().subscribe(
            data => this.githubSuccess(data),
            error => this.githubFail(error)
        );
    }

    userDetails(user) {
        this.authentication.setUserDetails(user);
        this.router.navigate(['userDetails/' + user.login]);
    }

    githubSuccess({ data }) {
        this.githubFollowers = data;
        data.forEach(user => {
            this.barChartLabels.push(user.login)
            this.barChartData[0].data.push(user.followers)
        });
        this.cdr.detectChanges();
        this._spinner.hide();
    }

    githubFail(error) {
        this._spinner.hide();
    }
}
