import { Injectable, EventEmitter, Output } from '@angular/core';
@Injectable()

export class AuthenticationHelper {
    user: any;
    userKey: string = 'user';
    setUserDetailsItem: any;

    @Output() changeContentTopText: EventEmitter<any> = new EventEmitter(true);
    @Output() userValueChanged: EventEmitter<any> = new EventEmitter(true);

    constructor() {
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    setApiKey(api_key) {
        localStorage.setItem('api-key', api_key);
    }

    setUserLocal(value) {
        localStorage.setItem('userName', value.data.user.firstName);
        localStorage.setItem('user', JSON.stringify(value.data.user));
        localStorage.setItem('profileImageURL', value.data.user.profileImageURL);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        let token = this.getToken();
        if (token && token.length > 0) {
            return true;
        }
        return false;
    }

    isUser() {
        let userData = JSON.parse(this.getUserData());
        if (userData) {
            return true;
        }
    }

    getUserData() {
        return localStorage.getItem(this.userKey);
    }

    setIsLoggedIn(IsLoggedIn) {
        localStorage.setItem('IsLoggedIn', IsLoggedIn);
    }

    setChangedContentTopText(value) {
        this.changeContentTopText.emit(value);
    }

    setUserDetails(value) {
        this.setUserDetailsItem = value;
    }

    getUserDetails() {
        return this.setUserDetailsItem;
    }

    getChangedContentTopText(): EventEmitter<any> {
        return this.changeContentTopText;
    }

    userValueChangedEvent(value): void {
        this.user = value;
        this.userValueChanged.emit(value);
    }

    getUserValueChangeEmitter(): EventEmitter<any> {
        return this.userValueChanged;
    }

    setUser(inputUser) {
        this.user = inputUser;
    }

    getUser() {
        return this.user;
    }
}
