import { Component } from '@angular/core';
import { GlobalState } from '../../../global.state';
import { Router } from '@angular/router';
import { AuthenticationHelper } from '../../../app.authentication';
import { ToastrService } from 'ngx-toastr';
import {AppConstant} from "../../../app.constant";

@Component({
    selector: 'ba-page-top',
    templateUrl: './baPageTop.html',
    styleUrls: ['./baPageTop.scss'],
})

export class BaPageTop extends AppConstant {
    public isScrolled: boolean = false;
    public isMenuCollapsed: boolean = false;
    public userName: string;
    public userProfileImage: string;
    public rolesArray: any = [];
    public isAdmin: boolean;

    constructor(public toastr: ToastrService, private _state: GlobalState, public router: Router, public authentication: AuthenticationHelper) {
        super();
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });

        this.userName = localStorage.getItem('userName') || 'Admin';
        this.userProfileImage = localStorage.getItem('profileImageURL');
        this.rolesArray = localStorage.getItem('roles');
        if (this.rolesArray && this.rolesArray.indexOf('admin') !== -1){
            this.isAdmin = false;
        }else{
            this.isAdmin = true;
        }
    }

    ngOnInit() {
        this.authentication.getUserValueChangeEmitter().subscribe(item => this.setUserInfo());
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }

    // logout
    public loggedOff() {
        this.router.navigate(['login']);
        localStorage.clear();
        this.toastr.success('Logged Out successfully');
    }

    // navigate to profile.
    public navigateToProfile() {
        this.router.navigate(['profile']);
    }

    // navigate to dashboard.
    navigateToDashboard() {
        this.router.navigate(['users']);
    }

    userValueChanged(value) {
        this.setUserInfo();
    }

    // to set updated user details
    public setUserInfo() {
        let input = this.authentication.getUser();
        this.userProfileImage = input.profileImageURL;
        this.userName = input.firstName;
    }
}
