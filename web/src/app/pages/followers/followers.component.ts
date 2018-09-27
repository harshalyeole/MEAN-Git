import {Component} from '@angular/core';
import {AuthenticationHelper} from "../../app.authentication";
import {Router}  from '@angular/router';
import {BaThemeSpinner} from "../../theme/services/baThemeSpinner/baThemeSpinner.service";

@Component({
    selector: 'followers',
    styleUrls: ['./followers.scss'],
    templateUrl: './followers.html'
})
export class Followers {
    isUser:any;
    constructor(private _spinner: BaThemeSpinner, private authentication:AuthenticationHelper, private router:Router) {
        this.isUser = this.authentication.isUser();
    }

    ngOnInit() {
        console.log("==================", this.authentication.getUserData());
    }

    ngAfterViewChecked() {
        this._spinner.hide();
    }
}
